import * as bun from 'bun';

const API_URL = 'http://192.168.2.97:9000/asr';
const WAV_PATH = 'chut.wav'

const formData = new FormData();
formData.append('audio_file', bun.file(WAV_PATH));

const response = await bun.fetch(`${API_URL}?output=json&word_timestamps=true`, {
  method: 'POST',
  body: formData,
});

if (response.ok) {
  const data = await response.text();
  console.log('Transcription:', data);
} else {
  console.error('Error:', response.status, response.statusText);
}
