.PHONY: run build clean

observer:
	npx ts-node pattern/observer/observer.ts

decorator:
	npx ts-node pattern/decorator/example.ts

chain:
	npx ts-node pattern/chain-of-responsibility/example.ts

clean:
	rm -rf dist/ 

build:
	npx tsc