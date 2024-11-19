import { User } from "phosphor-react";
import { AvatarContainer, AvatarFallback, AvatarImage } from "./styles";
import { ComponentProps } from "react";

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}
export function Avatar() {
  return (
    <AvatarContainer>
      <AvatarImage />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  );
}
