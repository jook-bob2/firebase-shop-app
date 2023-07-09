# Getting Started with Create React App

## 설정
- npx create-react-app my-app

- eslint / prettier 설치
npx eslint --init

yarn add -D prettier eslint-config-airbnb eslint-plugin-prettier eslint-config-prettier

.eslintrc.js 파일 작성
.prettierrc 파일 작성


- settings.json
{
	"editor.formatOnSave": true,
	"editor.defaultFormatter": "esbenp.prettier-vscode"
	"[javascriptreact]": {
	"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[javascript]": {
	"editor.defaultFormatter": "esbenp.prettier-vscode"
	}
}

- jsconfig.json 파일 생성
컴파일 옵션 설정

- react-router-dom 설치
yarn add react-router-dom

- 번들러 설치 (vite)
yarn add -D vite @vitejs/plugin-react eslint-plugin-import eslint-plugin-jsx-a11y vite-plugin-ejs vite-plugin-svgr @vitejs/plugin-react-refresh vite-plugin-eslint vite-tsconfig-paths vite-plugin-env-compatible vite-plugin-swc-react

