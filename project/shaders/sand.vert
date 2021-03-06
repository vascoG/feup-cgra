attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform float timeFactor;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

uniform sampler2D uSampler2;

varying vec2 vTextureCoord;

void main() {

	vTextureCoord = aTextureCoord;

    vec3 offset = aVertexNormal * texture2D(uSampler2,vTextureCoord).b*0.1;

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition-offset, 1.0);
	
	gl_Position = gl_Position + vec4(0,2,0,0);

}
