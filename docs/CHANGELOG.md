# 🧾 CHANGELOG – Article Preview Component

Este documento registra los avances, decisiones y aprendizajes por fase del proyecto **Article Preview Component**.  
Se actualiza con cada cierre de nivel del juego (fase) siguiendo la metodología profesional implementada.

---

## 🧩 Fase 0 – Briefing y análisis
**Fecha:** 11/11/2025  
**Estado:** ✅ Completada

### 🔍 Actividades realizadas
- Revisión de materiales de Frontend Mentor (imágenes, estructura y Figma).  
- Comprensión del objetivo del reto: reproducir un componente de vista previa de artículo con interactividad JS.  
- Planificación del flujo de trabajo en 5 fases.

### 💡 Decisiones clave
- Mantener el proyecto en inglés para coherencia con Frontend Mentor.  
- Trabajar en español a nivel interno (notas, documentación).  
- Implementar metodología por fases para simular sprints reales.

### 🧠 Aprendizajes
- La importancia de entender los materiales y el flujo del proyecto antes de escribir código.  
- Cómo estructurar un juego de aprendizaje que combine práctica técnica y simulación de entorno profesional.

---

## 🧩 Fase 1 – Setup profesional
**Fecha:** 12/11/2025  
**Estado:** ✅ Completada

### 🔍 Actividades realizadas
- Organización de carpetas: `/styles`, `/scripts`, `/design`, `/images`, `/figma`.  
- Configuración de Live Server.  
- Inicialización de Git y creación del flujo de ramas profesional (`main`, `dev`, `feature/*`).  
- Subida inicial del proyecto a GitHub.

### 💡 Decisiones clave
- Mantener SCSS y CSS simultáneamente para tener compatibilidad y estilo de trabajo híbrido.  
- No crear subcarpeta `/assets` hasta que existan más tipos de recursos.  
- No aplicar reglas de protección de ramas por trabajar en solitario.

### 🧠 Aprendizajes
- Cómo crear y gestionar un flujo Git profesional sin necesidad de un equipo.  
- Beneficios de separar las fases en ramas `feature/` para evitar errores en la rama principal.  
- Mejora en la comprensión del flujo completo `main → dev → feature`.

---

## 🧩 Fase 2 – Diseño y Layout  
**Fecha:** 13–15/11/2025
**Estado:** ✅ Completada

### 🎯 Objetivo
Construir el layout responsive (mobile → tablet → desktop), aplicando tokens, HTML semántico y diseño flexible basado en el archivo Figma.

### 🔍 Actividades realizadas
- HTML semántico completo con `article`, `footer`, etiquetado accesible y uso correcto de `<time>`.  
- Implementación de tokens de diseño:
  - Sistema de colores según `style-guide.md`.
  - Tipografías, pesos, line-heights y escala de espaciado.
  - Contenedor base y estructura global desde `main`.
- Maquetación Mobile First:
  - Card en una columna.
  - Imagen superior recortada con `overflow: hidden`.
  - Jerarquía tipográfica y espaciado coherente.
- Maquetación Tablet/Escritorio:
  - Grid de 2 columnas (imagen lateral izquierda, contenido a la derecha).
  - Imagen ocupando toda la altura de la tarjeta (`object-fit: cover`).
  - Footer alineado correctamente dentro de la columna derecha.
  - Ajuste de proporciones y paddings según Figma.

### 💡 Decisiones clave
- Centrar la card desde `<main>` en lugar de desde el propio componente.  
- Mantener Mobile First como estructura base del proyecto.  
- Usar Grid explícito en desktop para controlar filas y columnas de forma profesional.

### 🧠 Aprendizajes
- Cómo convertir un diseño Figma en layout responsive real usando Grid + flex.  
- Manejo de imágenes en layouts adaptables (alturas variables, `object-fit`, recortes, overflow).  
- Cómo modularizar estilos manteniendo claridad con SCSS y tokens.  
- Técnicas para alinear contenido en layouts mixtos (grid + flex).

---

## 🧩 Fase 3 – Interactividad JS
**Estado:** ⏸ Pendiente  
Prevista para añadir el comportamiento del botón de compartir, accesibilidad con teclado y gestión del foco.

---

## 🧩 Fase 4 – QA y Deploy
**Estado:** ⏸ Pendiente  
Prevista para validación con Lighthouse, W3C y publicación en GitHub Pages.

---

## 🧩 Fase 5 – Retro final
**Estado:** ⏸ Pendiente  
Se documentarán aprendizajes, mejoras y conclusiones finales del proyecto.

---

📅 **Última actualización:** 15/11/2025  
👤 **Autor:** Jorge Muñoz Wunder