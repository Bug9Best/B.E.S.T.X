import { Component } from '@angular/core';

@Component({
  selector: 'streaming-content',
  templateUrl: './streaming-content.component.html',
  styleUrl: './streaming-content.component.scss'
})
export class StreamingContentComponent {

  onCamera: boolean = false;
  onAudio: boolean = false;
  onShareScreen: boolean = false;


  constructor(
  ) { }

  constraints: MediaStreamConstraints = {
    audio: false,
    video: true,
  };

  handleSuccess(stream: MediaStream) {
    const video: HTMLVideoElement = document.querySelector('video')!;
    const videoTracks: MediaStreamTrack[] = stream.getVideoTracks();
    console.log('Got stream with constraints:', this.constraints);
    console.log(`Using video device: ${videoTracks[0].label}`);
    (window as any).stream = stream; // make variable available to browser console
    video.srcObject = stream;
  }

  handleError(error: any) {
    if (error.name === 'OverconstrainedError') {
      const v = this.constraints.video as MediaTrackConstraints;
      // this.errorMsg(`The resolution ${v.width!.exact}x${v.height!.exact!} px is not supported by your device.`);
    } else if (error.name === 'NotAllowedError') {
      this.errorMsg('Permissions have not been granted to use your camera and ' +
        'microphone, you need to allow the page access to your devices in ' +
        'order for the demo to work.');
    }
    this.errorMsg(`getUserMedia error: ${error.name}`, error);
  }

  errorMsg(msg: string, error?: any) {
    const errorElement: HTMLElement | null = document.querySelector('#errorMsg');
    if (errorElement) {
      errorElement.innerHTML += `<p>${msg}</p>`;
    }
    if (typeof error !== 'undefined') {
      console.error(error);
    }
  }

  onToggleStreaming() {
    if (this.onCamera) {
      this.stopStreaming();
      this.onCamera = false;
    }
    else {
      this.startStreaming();
      this.onCamera = true;
    }
  }

  async startStreaming() {
    try {
      const stream: MediaStream = await navigator.mediaDevices.getUserMedia(this.constraints);
      this.handleSuccess(stream);
    } catch (e) {
      this.handleError(e);
    }
  }

  stopStreaming() {
    const video: HTMLVideoElement = document.querySelector('video')!;
    const stream: MediaStream = video.srcObject as MediaStream;
    const tracks: MediaStreamTrack[] = stream.getTracks();
    tracks.forEach(track => track.stop());
    video.srcObject = null;
  }

  onToggleMicrophone() {
    if (this.onAudio) {
      this.onAudio = false;
    }
    else {
      this.onAudio = true;
    }
  }

  onToggleShareScreen() {
    if (this.onShareScreen) {
      this.stopShareScreen();
    }
    else {
      this.startShareScreen();
    }
  }

  async getDisplayMedia(): Promise<MediaStream> {
    try {
      const options: MediaStreamConstraints = { video: true };
      return await navigator.mediaDevices.getDisplayMedia(options);
    } catch (error) {
      throw new Error(`Error accessing display media: ${error}`);
    }
  }

  async startShareScreen() {
    try {
      const stream = await this.getDisplayMedia();
      const videoElement = document.getElementById('video-container') as HTMLVideoElement;
      if (videoElement) {
        videoElement.srcObject = stream;
      }
      this.onShareScreen = true;
    } catch (error) {
      console.error(`Error in getting display media: ${error}`);
    }
  }

  stopShareScreen() {
    const video: HTMLVideoElement = document.querySelector('video')!;
    const stream: MediaStream = video.srcObject as MediaStream;
    const tracks: MediaStreamTrack[] = stream.getTracks();
    tracks.forEach(track => track.stop());
    video.srcObject = null;
    this.onShareScreen = false;
  }
}
