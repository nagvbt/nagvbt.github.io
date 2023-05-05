---
tags: ["WPF"]
---

# WPF Architecture

The major code portions of WPF are.

PresentationFramework, PresentationCore, and milcore WPF. PresentationFramework, PresentationCore are managed components but only milcore is an unmanaged component Milcore is developed in unmanaged code in order to enable tight integration with DirectX. All display in WPF is done through the DirectX engine, allowing for efficient hardware and software rendering.

**1. Presentation Framework**

Most of the important WPF elements are in Presentation Framework.  Presentation Framework Provides high-level services like layout, data binding, command handling.

**2. Presentation Core**

Presentation provides .NET API that uses rendering services for the MIL. During graphics programming we work with Core API.

**3. Milcore**

The composition engine in milcore (Media Integration) is extremely performance sensitive. MIL takes Bitmaps, Vectors, and media render them to the DirectX
