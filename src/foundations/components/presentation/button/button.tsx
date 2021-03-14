import Styled, { css } from "styled-components/macro";
import { border, BorderProps } from "styled-system";

export enum ButtonVariants {
  PRIMARY = "primary"
}

interface ButtonProps extends BorderProps {
  /** Specify a Button variant */
  variant?: ButtonVariants | false;
  /** Background color when component is hovered */
  hoverBg?: string | false;
}

const PrimaryButton = css`
  background: linear-gradient(
    0deg,
    rgba(0, 106, 150, 1) 20%,
    rgba(255, 205, 0, 1) 83%
  );
  border-radius: ${p => p.theme.radii.light};
  color: ${p => p.theme.colors.activeText};
  font-size: 14px;
  padding: ${p => `${p.theme.space[3]} ${p.theme.space[0]}`};
  text-align: center;
`;

export const Button = Styled.button<ButtonProps>`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  outline: none;
  padding: 0;
  text-align: left;
  width: 100%;

  &:hover {
    background: ${p => p.hoverBg};
  }

  ${props => props.variant === ButtonVariants.PRIMARY && PrimaryButton}
  ${border}
`;
