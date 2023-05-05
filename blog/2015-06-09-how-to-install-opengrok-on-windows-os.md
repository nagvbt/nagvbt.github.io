---
title: "How to install OpenGrok on Windows OS"
date: "2015-06-09"
categories: 
  - "tools-technology-news"
---

# Install OpenGrok on Windows OS

OpenGrok is a fast and usable source code search and cross reference engine. It helps you search, cross-reference and navigate your source code.

## Requirements:

1. Create a folder 'C:OpenGrok'
    
2. Install [JDK](http://www.oracle.com/technetwork/java/) 1.7 or higher
    
    - Add 'JRE\_HOME' environmental variable with value for JRE (eg: C:Program Files (x86)Javajre1.8.0\_40)
    - Add Java.exe  path  (eg: C:Program Files (x86)Javajre1.8.0\_40bin) in environmental PATH variable and restart computer

3. Download a [Ctags](http://ctags.sourceforge.net/) from [Ctags Windows Binary](http://ctags.sourceforge.net/) unzip and place it in C:OpenGrokCtags58 folder
    

4. Download and install [Tomcat](http://tomcat.apache.org/download-70.cgi). To run Tomcat as a windows service open command prompt and navigate to 'TOMCAT\_INSTALLbin' and execute 'service.bat install' command

## OpenGork Setup:

1. Download and unzip Opengork  [opengrok-0.12.1.tar.gz](http://java.net/projects/opengrok/downloads/download/opengrok-0.12.1.tar.gz) - Binary distribution to  'C:OpenGrok'

2. Extract the "source.war" file in the "C:OpenGrokopengrok-0.12.1lib"

3. Edit the WEB-INFweb.xml to include

- Path to configuration.xml that is generated  (CONFIGURATION )
- Location to the source being indexed. (SRC\_ROOT)
- Location to the "Ctag" generated grokData  (DATA\_ROOT)

[https://gist.github.com/nagvbt/8378786674100270279c](https://gist.github.com/nagvbt/8378786674100270279c)

4. Copy the the extracted source.war with the modified web.xml to the tomcat webapps folder.

5. Index the source and generate the configuration.xml file using the below command
    
    > java -jar C:OpenGrokopengrok-0.12.1libopengrok.jar -W C:OpenGrokopengrok-0.12.1configuration.xml -c C:OpenGrokctags58ctags.exe -P -S -v -s D:Dev -d C:OpenGrokgrokdata
    
6. Launch Tomcat after the indexing in done. Open [http://localhost:8080/source](http://localhost:8080/source)
    
7. Repeat step-5 tp re-index if you need to add new projects/pick new source etc.
