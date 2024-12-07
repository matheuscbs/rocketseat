import { User } from "phosphor-react";
import { ComponentProps } from "react";
import { AvatarContainer, AvatarFallback, AvatarImage } from "./styles";

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

Avatar.displayName = "Avatar";
