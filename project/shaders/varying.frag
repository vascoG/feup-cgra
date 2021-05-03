#ifdef GL_ES
precision highp float;
#endif

varying vec4 coords;
varying vec4 normal;

uniform float red;
uniform float blue;
uniform float green;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float headRatio;

void main() {
	if (coords.z > ((0.05-headRatio*0.1)*2.0))
		gl_FragColor =  vec4(red,green,blue,1);
	else
		gl_FragColor = texture2D(uSampler, vTextureCoord);
}