# Vue 3 Chat App

A modern chat application built with Vue 3, featuring rich markdown support, beautiful chat bubbles, and PrimeVue 4 components.

## Features

- ✨ **Vue 3 Composition API** - Modern reactive programming
- 🎨 **PrimeVue 4 Components** - Beautiful UI components
- 📝 **Markdown Support** - Rich text formatting in chat bubbles
- 🔒 **Type Safety** - Zod schemas for validation
- 🎯 **Responsive Design** - Works on desktop and mobile
- 🔄 **Real-time Feel** - Typing indicators and smooth animations
- 🛡️ **XSS Protection** - DOMPurify for secure markdown rendering

## Markdown Features

The chat supports the following markdown formatting:

- **Bold text** (`**bold**`)
- *Italic text* (`*italic*`)
- `Inline code` (`` `code` ``)
- ```Code blocks``` (``` ```code``` ```)
- [Links](https://example.com) (`[text](url)`)
- > Blockquotes (`> quote`)
- Headers (`# H1`, `## H2`, etc.)
- Lists (`- item` or `1. item`)

## Installation

1. Navigate to the chat directory:
```bash
cd chat
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

## Project Structure

```
chat/
├── src/
│   ├── types/
│   │   └── chat.js          # Zod schemas and type definitions
│   ├── utils/
│   │   └── markdown.js      # Markdown rendering utilities
│   ├── App.vue              # Main application component
│   ├── main.js              # Vue app entry point
│   └── style.css            # Global styles
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
└── README.md               # This file
```

## Technologies Used

- **Vue 3** - Progressive JavaScript framework
- **PrimeVue 4** - UI component library
- **Zod** - TypeScript-first schema validation
- **Marked** - Markdown parser
- **DOMPurify** - XSS protection
- **Vite** - Build tool and dev server

## Usage

1. **Sending Messages**: Type your message in the textarea and press Enter or click the send button
2. **Markdown Toggle**: Use the checkbox to enable/disable markdown formatting
3. **Rich Formatting**: Use markdown syntax to format your messages
4. **Responsive**: The app works seamlessly on both desktop and mobile devices

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Customization

You can customize the app by:

1. **Styling**: Modify `src/style.css` for global styles
2. **Components**: Update `src/App.vue` for UI changes
3. **Types**: Modify `src/types/chat.js` for schema changes
4. **Markdown**: Update `src/utils/markdown.js` for rendering changes

## Security

- All markdown content is sanitized using DOMPurify
- Input validation using Zod schemas
- XSS protection for user-generated content

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for your own applications!
