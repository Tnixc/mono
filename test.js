import * as bun from 'bun';

const API_URL = 'http://192.168.2.97:9000/asr';
const WAV_PATH = 'ch.mp3'
const params = new URLSearchParams({
  task: 'transcribe',
  output: 'json',
  word_timestamps: 'true',
});

const formData = new FormData();
formData.append('audio_file', bun.file(WAV_PATH));

const response = await bun.fetch(`${API_URL}?${params.toString()}`, {
  method: 'POST',
  body: formData,
});

if (response.ok) {
  const data = await response.text();
  console.log(data);
} else {
  console.error(response.status, response.statusText);
}
