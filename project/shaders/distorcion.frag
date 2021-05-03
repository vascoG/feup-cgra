#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform float timeFactor;
uniform sampler2D uSampler1;
uniform sampler2D uSampler2;

void main() {
	vec4 offset = texture2D(uSampler2, vTextureCoord);
		vec2 filter = vec2(offset.x-0.5, offset.y-0.5);
	vec2 move = mod(vTextureCoord+filter+timeFactor*0.005,1.0);

	vec4 color = texture2D(uSampler1, move);

	gl_FragColor = color;
}