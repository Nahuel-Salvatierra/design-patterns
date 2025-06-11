.PHONY: run build clean

observer:
	npx ts-node pattern/observer/observer.ts

clean:
	rm -rf dist/ 

build:
	npx tsc