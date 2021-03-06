define(["require", "exports"], function (require, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    function createProgram(gl, name, vertex, fragment, uniforms) {
        var program = gl.createProgram();
        var vertexShader = gl.createShader(gl.VERTEX_SHADER);
        var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(vertexShader, vertex);
        gl.compileShader(vertexShader);
        programLog(name + " - vertex", gl.getShaderInfoLog(vertexShader));
        gl.shaderSource(fragmentShader, fragment);
        gl.compileShader(fragmentShader);
        programLog(name + " - fragment", gl.getShaderInfoLog(fragmentShader));
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        programLog(name + " - link program", gl.getProgramInfoLog(program));
        var uniformLocations = {};
        if (uniforms) {
            for (var _i = 0, uniforms_1 = uniforms; _i < uniforms_1.length; _i++) {
                var uniformName = uniforms_1[_i];
                uniformLocations[uniformName] = gl.getUniformLocation(program, uniformName);
            }
        }
        return {
            program: program,
            uniformLocations: uniformLocations
        };
    }
    exports.createProgram = createProgram;
    function createCubeGeometry(halfSize) {
        // Create data for a simple cube
        return new Float32Array([
            // Bottom face
            -halfSize, -halfSize, 0,
            0, 0, -1,
            halfSize, -halfSize, 0,
            0, 0, -1,
            halfSize, halfSize, 0,
            0, 0, -1,
            -halfSize, -halfSize, 0,
            0, 0, -1,
            halfSize, halfSize, 0,
            0, 0, -1,
            -halfSize, halfSize, 0,
            0, 0, -1,
            // Top face
            -halfSize, -halfSize, halfSize * 2,
            0, 0, 1,
            halfSize, -halfSize, halfSize * 2,
            0, 0, 1,
            halfSize, halfSize, halfSize * 2,
            0, 0, 1,
            -halfSize, -halfSize, halfSize * 2,
            0, 0, 1,
            halfSize, halfSize, halfSize * 2,
            0, 0, 1,
            -halfSize, halfSize, halfSize * 2,
            0, 0, 1,
            // Left face
            -halfSize, -halfSize, 0,
            -1, 0, 0,
            -halfSize, -halfSize, halfSize * 2,
            -1, 0, 0,
            -halfSize, halfSize, halfSize * 2,
            -1, 0, 0,
            -halfSize, -halfSize, 0,
            -1, 0, 0,
            -halfSize, halfSize, halfSize * 2,
            -1, 0, 0,
            -halfSize, halfSize, 0,
            -1, 0, 0,
            // Right face
            halfSize, -halfSize, 0,
            1, 0, 0,
            halfSize, halfSize, halfSize * 2,
            1, 0, 0,
            halfSize, -halfSize, halfSize * 2,
            1, 0, 0,
            halfSize, -halfSize, 0,
            1, 0, 0,
            halfSize, halfSize, 0,
            1, 0, 0,
            halfSize, halfSize, halfSize * 2,
            1, 0, 0,
            // Front face
            -halfSize, -halfSize, 0,
            0, -1, 0,
            halfSize, -halfSize, 0,
            0, -1, 0,
            halfSize, -halfSize, halfSize * 2,
            0, -1, 0,
            -halfSize, -halfSize, 0,
            0, -1, 0,
            halfSize, -halfSize, halfSize * 2,
            0, -1, 0,
            -halfSize, -halfSize, halfSize * 2,
            0, -1, 0,
            // Back face
            -halfSize, halfSize, 0,
            0, 1, 0,
            halfSize, halfSize, halfSize * 2,
            0, 1, 0,
            halfSize, halfSize, 0,
            0, 1, 0,
            -halfSize, halfSize, 0,
            0, 1, 0,
            -halfSize, halfSize, halfSize * 2,
            0, 1, 0,
            halfSize, halfSize, halfSize * 2,
            0, 1, 0
        ]);
    }
    exports.createCubeGeometry = createCubeGeometry;
    function programLog(name, info) {
        if (info) {
            console.error("Failed to compile or link", name, info);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViZ2xVdGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYmdsVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SUFLQSx1QkFBOEIsRUFBeUIsRUFBRSxJQUFZLEVBQUUsTUFBYyxFQUFFLFFBQWdCLEVBQUUsUUFBbUI7UUFDMUgsSUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ25DLElBQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3ZELElBQU0sY0FBYyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRTNELEVBQUUsQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3RDLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDL0IsVUFBVSxDQUFJLElBQUksY0FBVyxFQUFFLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBRWxFLEVBQUUsQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDakMsVUFBVSxDQUFJLElBQUksZ0JBQWEsRUFBRSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUV0RSxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztRQUN2QyxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztRQUN6QyxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXhCLFVBQVUsQ0FBSSxJQUFJLG9CQUFpQixFQUFFLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBRXBFLElBQU0sZ0JBQWdCLEdBQTRDLEVBQUUsQ0FBQztRQUVyRSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2IsR0FBRyxDQUFDLENBQW9CLFVBQVEsRUFBUixxQkFBUSxFQUFSLHNCQUFRLEVBQVIsSUFBUTtnQkFBM0IsSUFBSSxXQUFXLGlCQUFBO2dCQUNsQixnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO2FBQzdFO1FBQ0gsQ0FBQztRQUVELE1BQU0sQ0FBQztZQUNMLE9BQU8sU0FBQTtZQUNQLGdCQUFnQixrQkFBQTtTQUNqQixDQUFDO0lBQ0osQ0FBQztJQS9CRCxzQ0ErQkM7SUFFRCw0QkFBbUMsUUFBZ0I7UUFDakQsZ0NBQWdDO1FBQ2hDLE1BQU0sQ0FBQyxJQUFJLFlBQVksQ0FBQztZQUN0QixjQUFjO1lBQ2QsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN2QixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUVSLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3RCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRVIsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDO1lBQ3JCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRVIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN2QixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUVSLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQztZQUNyQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUVSLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDO1lBQ3RCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBR1IsV0FBVztZQUNYLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsR0FBRyxDQUFDO1lBQ2xDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUVQLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxRQUFRLEdBQUcsQ0FBQztZQUNqQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFFUCxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsR0FBRyxDQUFDO1lBQ2hDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUVQLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsR0FBRyxDQUFDO1lBQ2xDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUVQLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxHQUFHLENBQUM7WUFDaEMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBRVAsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsR0FBRyxDQUFDO1lBQ2pDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUdQLFlBQVk7WUFDWixDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBRVIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxHQUFHLENBQUM7WUFDbEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFFUixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxHQUFHLENBQUM7WUFDakMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFFUixDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBRVIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsR0FBRyxDQUFDO1lBQ2pDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBRVIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7WUFDdEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFHUixhQUFhO1lBQ2IsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDdEIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBRVAsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEdBQUcsQ0FBQztZQUNoQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFFUCxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxHQUFHLENBQUM7WUFDakMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBRVAsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDdEIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBRVAsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDO1lBQ3JCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUVQLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxHQUFHLENBQUM7WUFDaEMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBR1AsYUFBYTtZQUNiLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDdkIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFFUixRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN0QixDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUVSLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxRQUFRLEdBQUcsQ0FBQztZQUNqQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUVSLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDdkIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFFUixRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxHQUFHLENBQUM7WUFDakMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFFUixDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxRQUFRLEdBQUcsQ0FBQztZQUNsQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUdSLFlBQVk7WUFDWixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQztZQUN0QixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFFUCxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsR0FBRyxDQUFDO1lBQ2hDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUVQLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQztZQUNyQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFFUCxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQztZQUN0QixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFFUCxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxHQUFHLENBQUM7WUFDakMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBRVAsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEdBQUcsQ0FBQztZQUNoQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDUixDQUFDLENBQUM7SUFDTCxDQUFDO0lBMUhELGdEQTBIQztJQUVELG9CQUFvQixJQUFZLEVBQUUsSUFBWTtRQUM1QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ1QsT0FBTyxDQUFDLEtBQUssQ0FBQywyQkFBMkIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekQsQ0FBQztJQUNILENBQUMifQ==