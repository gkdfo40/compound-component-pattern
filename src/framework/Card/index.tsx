export enum CardStyleType {
  Warnning = "Warnning",
  Nomal = "Nomal",
  Silver = "Silver",
  Gold = "Gold",
}

interface ICardBaseProps {
  CardStyle: CardStyleType;
  children: React.ReactNode;
}
const CardBase = (props: ICardBaseProps) => {
  const { CardStyle, children } = props;

  return (
    <div
      className={
        CardStyle === CardStyleType.Warnning
          ? "w-full h-fit rounded-md drop-shadow-sm bg-red-500"
          : "" + CardStyle === CardStyleType.Nomal
          ? "w-full h-fit rounded-md drop-shadow-sm bg-lime-200"
          : "" + CardStyle === CardStyleType.Silver
          ? "w-full h-fit rounded-md drop-shadow-sm bg-emerald-300"
          : "" + CardStyle === CardStyleType.Gold
          ? "w-full h-fit rounded-md drop-shadow-sm bg-yellow-200"
          : ""
      }
    >
      {children}
    </div>
  );
};

export enum HeaderTitleSortType {
  Right = "Right",
  Center = "Center",
  Left = "Left",
}

interface ICardHeaderProps {
  TitleSortStyle?: HeaderTitleSortType;

  children: React.ReactNode;
}
const CardHeader = (props: ICardHeaderProps) => {
  const { TitleSortStyle = HeaderTitleSortType.Center, children } = props;
  return (
    <header
      className={
        TitleSortStyle === HeaderTitleSortType.Center
          ? "flex w-full px-3 text-center border-b-2 border-indigo-600 justify-center"
          : "" + TitleSortStyle === HeaderTitleSortType.Right
          ? "flex w-full px-3 text-center border-b-2 border-indigo-600 justify-end"
          : "" + TitleSortStyle === HeaderTitleSortType.Left
          ? "flex w-full px-3 text-center border-b-2 border-indigo-600 justify-start"
          : ""
      }
    >
      {children}
    </header>
  );
};

interface ICardBodyProps {
  children: React.ReactNode;
}

const CardBody = (props: ICardBodyProps) => {
  const { children } = props;
  return <main className="w-full">{children}</main>;
};
interface ICardTextProps {
  children: React.ReactNode;
}
const CardText = (props: ICardTextProps) => {
  const { children } = props;
  return <p>{children}</p>;
};

interface ICardFooterProps {
  children: React.ReactNode;
}
const CardFooter = (props: ICardFooterProps) => {
  const { children } = props;
  return (
    <footer className="w-full border-t-2 border-indigo-600">{children}</footer>
  );
};

export const Card = Object.assign(CardBase, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
  Text: CardText,
});
