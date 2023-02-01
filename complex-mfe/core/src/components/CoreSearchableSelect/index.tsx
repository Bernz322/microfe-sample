import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { AutocompleteProps } from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

interface AutocompleteOptionData {
  // All expected values that are going to be rendered in the option field
  name: string;
  value: string;
  id: string;
}

interface Props<T extends AutocompleteOptionData> {
  autocompleteProps?: AutocompleteProps<
    T,
    boolean | undefined,
    boolean | undefined,
    boolean | undefined
  >;
  isClearable?: boolean;
  isDisabled?: boolean;
  value: T;
  onChange: (
    event: React.ChangeEvent<{}>,
    value: T,
    reason?: "selectOption"
  ) => void;
  inputValue: string;
  onInputChange: (event: React.ChangeEvent<{}>, value: string) => void;
  optionData: T[];
  error?: boolean;
}

const SearchableSelect = <T extends AutocompleteOptionData>(
  props: Props<T>
) => {
  const {
    autocompleteProps,
    isClearable,
    isDisabled,
    value,
    onChange,
    inputValue,
    onInputChange,
    optionData,
    error = value === null,
  } = props;

  return (
    <StyledContainer>
      <Autocomplete
        {...autocompleteProps}
        value={value}
        onChange={(event, value) => onChange(event, value as T)}
        disabled={isDisabled}
        disableClearable={isClearable}
        inputValue={inputValue}
        onInputChange={onInputChange}
        sx={{ width: 300 }}
        options={optionData}
        getOptionLabel={(option) => option["name"]}
        isOptionEqualToValue={(option, value) => option.value === value.value}
        noOptionsText="No options"
        renderInput={(params) => (
          <TextField
            {...params}
            error={error}
            label="Select option"
            helperText={error && "Error msg goes here"}
          />
        )}
        renderOption={(props, options) => {
          return (
            <Box component="li" {...props} key={options.id}>
              {options.name} - {options.value}
            </Box>
          );
        }}
      />
    </StyledContainer>
  );
};

const StyledContainer = styled("div")({
  flexGrow: 1,
});

export default SearchableSelect;
