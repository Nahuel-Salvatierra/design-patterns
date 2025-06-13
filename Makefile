.PHONY: run build clean

observer:
	npx ts-node pattern/observer/observer.ts

decorator:
	npx ts-node pattern/decorator/example.ts

clean:
	rm -rf dist/ 

build:
	npx tsc