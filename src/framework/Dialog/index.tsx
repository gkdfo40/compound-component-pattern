import React from "react";
import { createPortal } from "react-dom";

interface IDialogTitleProps {
  children: React.ReactNode;
}

const DialogTitle = (props: IDialogTitleProps) => {
  const { children } = props;
  return <div>{children}</div>;
};

interface IDialogLabelButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}
const DialogLabelButton = (props: IDialogLabelButtonProps) => {
  const { children } = props;
  return <div>{children}</div>;
};

interface IDialogMainProps {
  children: React.ReactNode;
  isOpen: boolean;
}
const DialogMain = (props: IDialogMainProps) => {
  const { children, isOpen } = props;
  if (!isOpen) return null;
  return createPortal(<div>{children}</div>, document.body);
};

export const Dialog = Object.assign(DialogMain, {
  Title: DialogTitle,
  LabelButton: DialogLabelButton,
});
