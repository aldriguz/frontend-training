## Webpack bundle project 


### First init a new node project with `npm init -y` command, this will create your package.json file

### Once you have your project created in place run this command

```
npm install --save-dev webpack webpack-dev-server webpack-cli
```

This will install webpack dependencies needed

### Add this entry to the package.json file inside scripts section

```
"test": "webpack serve --config ./webpack.config.js --mode development"
```

Try to run the bundle action `npm test`


### Now install react as library

```
npm install react react-dom
```

### And also babel preset react 

```
npm install --save-dev eslint @babel/core @babel/preset-env @babel/preset-react babel-loader babel-esling
```

## Troubleshooting

* "npm ERR! Refusing to install package with name "webpack" under a package"

Check that you are not using _webpack_ as a name for your project, also check your package.json to not use _webpack_ as a name