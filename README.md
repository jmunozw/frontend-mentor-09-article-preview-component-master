# 📰 Frontend Mentor – Article Preview Component (Solución de Jorge Muñoz)

## 🧭 Descripción general
Proyecto realizado como parte de la **Ruta 3 – Fundamentos de JavaScript**, integrando prácticas de entorno profesional, estructura modular, accesibilidad, responsive avanzado y Git Flow real.

Este componente replica fielmente el diseño proporcionado en Figma para mobile, tablet y desktop, incluyendo un patrón de interacción distinto según el viewport.

---

## 🎯 El desafío
Los usuarios deben poder:

- Ver el diseño óptimo del componente según el tamaño de pantalla (mobile, tablet y desktop).
- Mostrar/ocultar un panel de compartir (tooltip/banda inferior) al hacer clic en el icono.
- Cerrar el panel al hacer clic fuera o pulsar `Escape`.
- Navegar el componente correctamente en términos de accesibilidad (`aria-expanded`, `aria-controls`).

---

## 📱 Vista previa
*(Se añadirán capturas finales en la Fase 4)*

---

## 🔗 Enlaces
- **Repositorio:**  
  https://github.com/jmunozw/frontend-mentor-09-article-preview-component-master  
- **Demo en vivo:**
  https://jmunozw.github.io/frontend-mentor-09-article-preview-component-master/

---

## ⚙️ Metodología profesional aplicada

### 🧩 Fases del proyecto
| Fase | Descripción | Estado |
|------|--------------|---------|
| 0 | Briefing y análisis de materiales (Figma, imágenes, estructura base) | ✅ Completado |
| 1 | Setup profesional (estructura, Live Server, Git con flujo `main`/`dev`/`feature/*`) | ✅ Completado |
| 2 | Diseño y Layout (HTML semántico, tokens, layout mobile-first) | ✅ Completado |
| 3 | Interactividad JS (tooltip responsive, accesibilidad, click fuera, Escape) | ✅ Completado |
| 4 | QA y Deploy (revisión, Lighthouse, README final, publicación) | 🟡 En progreso  |
| 5 | Retro final (aprendizajes, mejoras, documentación) | ⏸ Pendiente |

---

## 🧱 Construido con
- **HTML5** semántico y accesible  
- **CSS3 / SCSS** (propiedades lógicas, tokens, `clamp()`, Mobile First)  
- **Flexbox + Grid Layout**  
- **JavaScript** (DOM, eventos, ARIA, interacción accesible)  
- **Git Flow profesional** (`main` / `dev` / `feature/*`)  
- **Live Server** para entorno local

---

## 📘 Aprendizajes principales por fase

### 🧩 Fase 0–1
- Configuración de un entorno profesional desde cero.  
- Git Flow real con ramas `feature/*`, `dev` y `main`.  
- Organización modular del proyecto.

### 🧩 Fase 2 – Diseño y Layout
- Construcción de layout **mobile-first real**.  
- Uso de tokens para mantener consistencia en colores, spacing y tipografía.  
- Implementación de Grid avanzado para vista desktop.  
- Control total de imágenes fluidas:  
  - `object-fit: cover`  
  - altura dinámica  
  - recortes limpios mediante `overflow: hidden`  
- Adaptación pixel-perfect a Figma en mobile, tablet y desktop.

### 🧩 Fase 3 – Interactividad JS
- Implementación de un panel de compartir **responsive con dos comportamientos**:
  - **Mobile:** banda inferior detrás del botón.  
  - **Desktop:** popover flotante con flecha centrada.
- Gestión accesible de interacción:
  - `aria-expanded`, `aria-controls`
  - cierre con tecla Escape  
  - cierre con clic fuera
- Listeners inteligentes con cleanup según estado del panel.  
- Manejo de capas (`z-index`) y posicionamiento (`absolute` + `relative`).  
- Control de overflow y paddings para evitar recortes en tablet.

---

## 🚀 Próximos pasos (Fase 4)
- Validación visual completa.  
- Test de accesibilidad con Lighthouse y W3C.  
- Revisión de contrastes y navegación por teclado.  
- Publicación en **GitHub Pages**.  
- Añadir capturas finales y métricas al README.

---

## 👤 Autor
**Jorge Muñoz Wunder**  
- Frontend Mentor: https://www.frontendmentor.io/profile/jmunozw  
- GitHub: https://github.com/jmunozw

---

## 🏁 Estado actual
🟢 Activo – Fase 3 completada con éxito.  
📅 Última actualización: **21/11/2025**