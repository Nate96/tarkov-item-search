export interface Component {
  init(): Promise<{ htmlString: string, cssFileUrl: string}>;
  render(): Promise<void>;
}