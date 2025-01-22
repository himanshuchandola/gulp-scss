
# Gulp-SCSS Demo  

A simple project demonstrating SCSS compilation to CSS using Gulp. This setup automates SCSS compilation and provides a workflow for monitoring changes in SCSS files.  

## Features  
- SCSS to CSS compilation.  
- Automated file watching for SCSS changes.  
- Organized folder structure for maintainable code.  

## Folder Structure  
```
GULP-DEMO  
│  
├── src  
│   ├── scss       # Source SCSS files  
│   │   └── style.scss  
│   ├── css        # Compiled CSS files  
│       └── style.css  
├── gulpfile.js    # Gulp configuration  
├── index.html     # HTML file  
├── package.json   # Node dependencies  
└── pnpm-lock.yaml # Lock file  
```  

## Installation  

1. Install Gulp CLI globally (if not already installed):  
   ```bash  
   npm install --global gulp-cli  
   ```  

2. Clone the repository:  
   ```bash  
   git clone <repository-url>  
   cd gulp-demo  
   ```  

3. Install dependencies:  
   ```bash  
   pnpm install  
   ```  

## Usage  

1. **Compile SCSS**:  
   Run the following command to compile SCSS to CSS:  
   ```bash  
   gulp compileSass  
   ```  

2. **Watch for Changes**:  
   Run the watcher to automatically compile SCSS when files are updated:  
   ```bash  
   gulp watch  
   ```  

## Dependencies  
- **gulp**: Task runner for automating development workflows.  
- **gulp-sass**: Gulp plugin for compiling SCSS.  
- **sass**: Dart Sass compiler.  
