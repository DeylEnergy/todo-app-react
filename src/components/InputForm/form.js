import React from 'react';
import {
  TextField,
  Button,
  InputAdornment,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Input,
  InputLabel,
  Select,
  MenuItem,
  AppBar,
  Toolbar,
  withStyles
} from '@material-ui/core';
import { ShortText, Receipt, DateRange } from '@material-ui/icons';

import importance from '../../models/importance';
import status from '../../models/status';

const styles = theme => ({
  field: {
    marginTop: '10px',
    marginBottom: '10px'
  },
  button: {
    marginLeft: '15px',
    marginRight: '15px'
  }
});

function Form(props) {
  const { classes, values, handleChange, handleSubmit, touched, errors, toggleModifyPanel } = props;

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="name"
        name="name"
        label="Название задачи"
        helperText={touched.name ? errors.name : ''}
        error={touched.name && Boolean(errors.name)}
        value={values.name}
        onChange={handleChange}
        fullWidth
        className={classes.field}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <ShortText />
            </InputAdornment>
          )
        }}
      />

      <TextField
        id="desc"
        name="desc"
        label="Описание задачи"
        multiline
        rowsMax="4"
        value={values.desc}
        onChange={handleChange}
        fullWidth
        className={classes.field}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Receipt />
            </InputAdornment>
          )
        }}
      />

      <TextField
        id="due"
        name="due"
        label="Дата выполнения"
        type="date"
        value={values.due}
        onChange={handleChange}
        fullWidth
        className={classes.field}
        InputLabelProps={{
          shrink: true
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <DateRange />
            </InputAdornment>
          )
        }}
      />

      {/* Radio buttons appear only after date pick */}
      <RadioGroup
        aria-label="Importance"
        name="importance"
        className={classes.group}
        style={{ display: values.due.length ? 'block' : 'none' }}
        value={values.importance}
        onChange={handleChange}
      >
        {importance.map((kind, id) => (
          <FormControlLabel key={kind} value={`${id}`} control={<Radio />} label={kind} />
          // Note: value is string, it has to be changed to int in App.js
        ))}
      </RadioGroup>

      <FormControl className={classes.formControl} fullWidth>
        <InputLabel htmlFor="status-helper">Статус</InputLabel>
        <Select
          value={values.status}
          onChange={handleChange}
          input={<Input name="status" id="status" />}
        >
          <MenuItem value="">
            <em>Нет</em>
          </MenuItem>
          {status.map((how, x) => (
            <MenuItem key={how} value={x}>
              {how}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Статус задания?</FormHelperText>
      </FormControl>

      <AppBar
        position="fixed"
        style={{
          top: 'auto',
          bottom: 0
        }}
      >
        <Toolbar>
          <Button type="submit" fullWidth variant="contained" className={classes.button}>
            Сохранить
          </Button>
          <Button
            fullWidth
            variant="contained"
            onClick={() => {
              const { name, desc, due } = values;
              toggleModifyPanel([name, desc, due, values.importance]);
            }}
            className={classes.button}
          >
            Отмена
          </Button>
        </Toolbar>
      </AppBar>
    </form>
  );
}

export default withStyles(styles)(Form);
