import React, { useCallback } from "react";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import { debounce } from "debounce";
import { InputMainPageProps } from "../../interface/interface";

const useStyles = makeStyles({
  inputMainPage: {
    marginLeft: "42%",
    minWidth: "200px,",
  },
});

export const InputMainPage: React.FC<InputMainPageProps> = ({
  setValueInput,
  title,
}) => {
  const classes = useStyles();

  const debounceSearch = useCallback(
    debounce(
      (event: React.ChangeEvent<HTMLInputElement>) =>
        setValueInput(event.target.value.toLowerCase()),
      1000
    ),
    []
  );

  const enterUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    debounceSearch(event);
  };

  return (
    <div>
      <TextField
        label={`Search for ${title}`}
        variant="standard"
        className={classes.inputMainPage}
        onChange={enterUser}
      />
    </div>
  );
};
