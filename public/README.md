# Public Assets Folder

Place your assets here:

- **Music files**: Add your birthday song (e.g., `birthday-song.mp3`) and reference it in `src/App.jsx` as `/birthday-song.mp3`
- **Images**: Add custom images and reference them as `/your-image.jpg`

## Example Usage

In `src/App.jsx`, update the CONFIG:

```javascript
const CONFIG = {
  friendName: 'Your Friend',
  birthdayMessage: 'Your message here!',
  imageUrl: '/birthday-cake.jpg',  // Local image from public folder
  musicUrl: '/happy-birthday.mp3', // Local music from public folder
}
```

