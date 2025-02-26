import { ListSubheader, styled, Theme } from "@mui/material";

type NavGroup = {
  navlabel?: boolean;
  subheader?: string;
};

interface ItemType {
  item: NavGroup;
}

const ListSubheaderStyle = styled(ListSubheader)(
  ({ theme }: { theme: Theme }) => ({
    ...theme.typography.overline,
    fontWeight: "700",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(0),
    color: theme.palette.text.primary,
    lineHeight: "26px",
    padding: "3px 12px",
  }),
);

const NavGroup = ({ item }: ItemType) => {
  return <ListSubheaderStyle>{item.subheader}</ListSubheaderStyle>;
};

export default NavGroup;
