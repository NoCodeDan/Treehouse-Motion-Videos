import { loadFont as loadQuicksand } from "@remotion/google-fonts/Quicksand";
import { loadFont as loadRoboto } from "@remotion/google-fonts/Roboto";

export const { fontFamily: quicksandFamily } = loadQuicksand("normal", {
  weights: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const { fontFamily: robotoFamily } = loadRoboto("normal", {
  weights: ["400", "500", "700"],
  subsets: ["latin"],
});
