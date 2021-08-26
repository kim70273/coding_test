const arr = [[Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
            [Infinity, 0, 1, 1, 1, Infinity],
            [Infinity, 1, 0, Infinity, 1, Infinity],
            [Infinity, 1, Infinity, 0, 1, 1],
            [Infinity, 1, 1, 1,0,1],
            [Infinity, Infinity, Infinity, 1, 1, 0]
        ];
        //플로이드 워셜 알고리즘 사용
            //0행과 0열은 안쓰고 1번 도시부터 5번 도시까지를 표현

            //1번에서 5번을 거쳐서 4번으로갈때 최소구하기
            //도달할수 없다면 -1 출력
            console.log(Infinity<1);

            for(let k=1;k<arr.length; k++){
                for(let a=1; a<arr.length; a++){
                    for(let b=1; b<arr.length; b++){
                        if(arr[a][b]>arr[a][k]+arr[k][b]) arr[a][b]=arr[a][k]+arr[k][b]; 
                    }
                }
            }

            console.log(arr);