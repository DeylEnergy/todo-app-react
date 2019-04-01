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
  LinearProgress,
  withStyles
} from '@material-ui/core';
import { ShortText, Receipt, DateRange } from '@material-ui/icons';

import DownshiftMultiple from '../DownshiftMultiple';

import importance from '../../models/importance';
import status from '../../models/status';

const styles = theme => ({
  field: {
    marginTop: '10px',
    marginBottom: '10px'
  },
  button: {
    width: '45%',
    height: '45px'
  },
  stripe: {
    display: 'flex',
    justifyContent: 'space-around',
    background: 'blue',
    width: '100%',
    height: '50px',
    padding: '10px'
  }
});

function Form(props) {
  const {
    classes,
    values,
    handleChange,
    handleSubmit,
    touched,
    errors,
    toggleModifyPanel,
    mutation,
    setTags,
    progress
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div
        className={classes.stripe}
        style={{
          background: '#ccc',
          position: 'absolute',
          paddingTop: '15px',
          top: 0
        }}
      >
        {mutation.todo ? 'Редактировать задачу' : 'Добавить задачу'}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100vh'
        }}
      >
        <div
          style={{
            overflow: 'hidden',
            height: '100%',
            width: '100%',
            marginTop: '60px'
          }}
        >
          <div
            style={{
              boxSizing: 'content-box',
              overflowY: 'scroll',
              padding: '10px 25px 10px 10px',
              height: '100%',
              width: '100%'
            }}
          >
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
            <div style={{ marginTop: '10px' }}>
              <DownshiftMultiple tags={mutation.todo ? mutation.todo.tags : []} onSet={setTags} />
            </div>
            <LinearProgress
              style={{
                marginTop: '15px',
                display: progress ? 'block' : 'none'
              }}
            />
            {/* give some space beneath */}
            <div style={{ height: '50px' }} />
          </div>
        </div>
        <div
          className={classes.stripe}
          style={{
            background: '#2196f3',
            alignItems: 'center',
            height: '70px'
          }}
        >
          <Button type="submit" variant="contained" className={classes.button}>
            Сохранить
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              const { name, desc, due } = values;
              toggleModifyPanel([name, desc, due, values.importance]);
            }}
            className={classes.button}
          >
            Отмена
          </Button>
        </div>
      </div>
    </form>
  );
}

export default withStyles(styles)(Form);
