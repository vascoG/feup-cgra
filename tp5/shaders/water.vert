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

	vec3 offset2 =aVertexNormal*texture2D(uSampler2,vTextureCoord+sin(timeFactor*0.1)).b*0.1;

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition+offset+offset2, 1.0);



}

