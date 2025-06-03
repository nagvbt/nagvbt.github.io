---
tags: ["WPF"]
---

# WPF Basics
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025 MD052-->
## 1. WPF Definition

Windows Presentation Foundation is the successor to Windows Forms for Microsoft Desktop Application development. WPF uses XAML to create visible User Interface (UI) elements like (buttons, listboxes, editboxes, etc).

WPF applications allows take advantage of the best attributes of diverse systems, such as DirectX (3-D and hardware acceleration), Adobe Flash (animation support), and HTML (declarative markup and easy deployment), styles, templates, documents and typograph.

## 2. Advantages of WPF Applications

The advantages of WPF applications include:

1. **Declarative programming** – WPF uses Extensible Application Markup Language (XAML) declarative programming to define the layout of application objects and to represent 3-D models, among other things. This allows graphic designers to directly contribute to the look and feel of WPF applications.

2. **Tight multimedia integration** –WPF provides consistent programming model to create -D graphics, video, speech, and rich document viewing.

3. **Resolution independence** –WPF uses vector graphics to make the applications resolution-independent. WPF Applications can shrink or enlarge elements on the screen, independent of the screen’s resolution.

4. **Hardware acceleration** – WPF is built on top of Direct3D, which offloads work to graphics processing units (GPUs) instead of central processor units (CPUs). This provides WPF applications with the benefit of hardware acceleration, permitting smoother graphics and enhanced performance.

5. **Rich composition and customization –** WPF controls are easily customizable. We need not write any code to customize controls in very unique ways. WPF also lets you create skins for applications that have radically different looks.

6. **Easy deployment** – WPF provides options for deploying traditional Windows applications (using Windows Installer or ClickOnce).

7. **Culturally aware controls** – static text in controls and the return data for the String function are modified according to the culture and language specified by the end user's operating system.

## 3. WPF vs WinForms

WPF is also more suitable for applications with rich media content than Windows Forms applications. This includes applications using:

1. Multimedia and animation with DirectX technology
2. HD video playback
3. XPS documentation for high quality printing
4. Control rotation (Windows Forms applications support text rotation only)

WPF is also great if you need to create a skinned user interface, or if you need to bind to XML data, or dynamically load portions of a user interface from a Web service, or want to create a desktop application with a Web-like navigation style.

WPF stores its data more efficiently hence individual objects will be small, but there tend to be more objects in WPF than in WinForms .This would require more RAM than Windows Application.

CPU utilization will go up compared to WinForms   WPF objects onscreen takes more CPU as normal WinForms rendering (again depending on the requirement).

## 4. XAML - eXtensible Application Markup Language

**Definition:** XAML (zammel) is an XML-based declarative markup. We can create visible User Interface (UI) elements like (buttons, listboxes, editboxes, etc) using XAML.

XAML files are XML files .xaml file name extension encoded as UTF-8.

**Example:**

C# Button  Compile (Design-time) and Execute (Runtime) where as XAML Button Load, Parse,Render and Display
