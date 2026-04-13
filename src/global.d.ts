declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module 'gsap' {
  export interface TweenConfig {
    [key: string]: any;
  }
  
  export function to(targets: any, config: TweenConfig): any;
  export function from(targets: any, config: TweenConfig): any;
  export function set(targets: any, config: TweenConfig): any;
  export class Timeline {
    to(targets: any, config: TweenConfig, position?: string | number): Timeline;
    from(targets: any, config: TweenConfig, position?: string | number): Timeline;
    set(targets: any, config: TweenConfig, position?: string | number): Timeline;
    play(): Timeline;
    pause(): Timeline;
    reverse(): Timeline;
    kill(): Timeline;
  }
  export function timeline(config?: any): Timeline;
}
