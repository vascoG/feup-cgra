#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;
uniform float timeFactor;

uniform sampler2D uSampler1;
uniform sampler2D uSampler2;

void main() {

	vec2 move = mod(vTextureCoord+timeFactor*0.01,1.0);

	vec4 color = texture2D(uSampler1, move);
	vec4 filter = texture2D(uSampler2, move);

	/*color.r = color.r - color.r*filter.b*0.2;
	color.g = color.g - color.g*filter.b*0.2;
	color.b = color.b - color.b*filter.b*0.2;*/
	gl_FragColor = color;
}