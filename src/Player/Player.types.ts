export interface PlayerComponentProps {
  /** Title of the audio */
  title?: string;
  /** Artist of the audio */
  artist?: string;
  /** URL of the Audio file */
  source?: string;
  /** URL of the Image file */
  artwork?: string;
  /** Position of the Player
   *
   * @default "bottom"
   */
  position?: "top" | "bottom";
  /** Color of the Player
   * @default "#000"
   * */
  bgColor?: string;
}
