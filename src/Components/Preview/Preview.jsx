import React, { useState, useEffect, useCallback, Component,useRef } from "react";

import "./Preview.scss";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import Avatar from '@mui/material/Avatar';
import { deepOrange, green } from '@mui/material/colors';
import AssignmentIcon from '@mui/icons-material/Assignment';


import { styled } from '@mui/material/styles';




import { useNavigate } from "react-router-dom";


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };





export default function Preview(props) {


  



  return (
    <div className="container">
      <div className="header">
        <h1>КЛИК-БОТ ❤️</h1>
        <h5>Зарегистрируйся, чтобы смотреть анкеты других людей.</h5>
      </div>
      <div className="form">
      
      <TextField id="outlined-basic" variant="standard" label="Введи своё имя"
      sx={{height: '60px',textIndent: '20px',borderRadius: '100px', background: '#FFF', display: 'flex',}}
      InputProps={{
        disableUnderline: true,
        sx: {
          paddingLeft: '20px',
        },
      }}
      />

    <div>

      <FormLabel id="demo-radio-buttons-group-label" sx={{fontSize: '2rem', color: 'black'}}>Укажи свой пол</FormLabel>
      <RadioGroup
        defaultValue="female"
        aria-labelledby="demo-customized-radios"
        name="customized-radios"
        sx={{
          display: 'flex',
          gap: '.5rem',
          
          
        }}
      >
        <div>
        <FormControlLabel value="male" control={<Radio sx={{color: 'white','&.Mui-checked': { color: '#9094FF' }, backgroundColor: 'white', height: '4rem', width: '4rem' }} />} label={<span style={{ paddingLeft: '1.5rem', fontSize: '2rem' }}>Мужской</span>} />
        </div>
        <div>
        <FormControlLabel value="female" control={<Radio sx={{ color: 'white','&.Mui-checked': { color: '#9094FF' }, backgroundColor: 'white', height: '4rem', width: '4rem' }} />} label={<span style={{ paddingLeft: '1.5rem', fontSize: '2rem' }}>Женский</span>} />
        </div>

      </RadioGroup>
    </div>
    <div>
      <FormLabel id="demo-radio-buttons-group-label" sx={{fontSize: '2rem'}}>С кем хочешь знакомиться?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        sx={{
          display: 'flex',
          gap: '.5rem',
          
          
        }}
      >
        <div>
        <FormControlLabel value="with_male" control={<Radio sx={{ color: 'white','&.Mui-checked': { color: '#9094FF' }, backgroundColor: 'white', height: '4rem', width: '4rem' }} />} label={<span style={{ paddingLeft: '1.5rem', fontSize: '2rem' }}>С женщинами</span>} />
        </div>
        <div>
        <FormControlLabel value="with_female" control={<Radio sx={{ color: 'white','&.Mui-checked': { color: '#9094FF' }, backgroundColor: 'white', height: '4rem', width: '4rem' }} />} label={<span style={{ paddingLeft: '1.5rem', fontSize: '2rem' }}>С мужчинами</span>} />
        </div>
        <div>
        <FormControlLabel value="another_lol" control={<Radio sx={{ color: 'white','&.Mui-checked': { color: '#9094FF' }, backgroundColor: 'white', height: '4rem', width: '4rem' }} />} label={<span style={{ paddingLeft: '1.5rem', fontSize: '2rem' }}>Со всеми</span>} />
        </div>
      </RadioGroup>
    </div>
    <div>
    <FormGroup>
    <FormLabel id="demo-radio-buttons-group-label"sx={{fontSize: '2rem', color: 'black'}}>Какие у тебя цели знакомства?</FormLabel>
    <FormLabel id="demo-radio-buttons-group-label"sx={{fontSize: '1.5rem'}}>Можно выбрать несколько или оставить пустым</FormLabel>
      <div>
      <FormControlLabel control={<Checkbox defaultChecked style={{ color: "white", height: '4rem', width: '4rem',transform: 'scale(3.5)' }} />} label={<span style={{ paddingLeft: '1.5rem', fontSize: '2rem' }}>Общение</span>} />
      </div>
      <div>
      <FormControlLabel control={<Checkbox defaultChecked style={{color: "white", height: '4rem', width: '4rem',transform: 'scale(3.5)'}}/>} label={<span style={{ paddingLeft: '1.5rem', fontSize: '2rem' }}>Вечеринка</span>} />
      </div>
      <div>
      <FormControlLabel control={<Checkbox defaultChecked style={{color: "white", height: '4rem', width: '4rem',transform: 'scale(3.5)'}}/>} label={<span style={{ paddingLeft: '1.5rem', fontSize: '2rem' }}>Встреча 18+</span>} />
      </div>
      <div>
      <FormControlLabel control={<Checkbox defaultChecked style={{color: "white", height: '4rem', width: '4rem',transform: 'scale(3.5)'}}/>} label={<span style={{ paddingLeft: '1.5rem', fontSize: '2rem' }}>Свидание</span>} />
      </div>
      <div>
      <FormControlLabel control={<Checkbox defaultChecked style={{color: "white", height: '4rem', width: '4rem',transform: 'scale(3.5)'}}/>} label={<span style={{ paddingLeft: '1.5rem', fontSize: '2rem' }}>Серьёзные отношения</span>} />
      </div>
    </FormGroup>
    </div>
    <div>

      <TextField id="outlined-basic" label="Дата рождения" variant="standard"
      sx={{marginBottom: '2rem',height: '60px',textIndent: '20px',borderRadius: '100px', background: '#FFF', display: 'flex',}}
      InputProps={{
        disableUnderline: true,
        sx: {
          paddingLeft: '20px',
        },
      }}/>

      <TextField id="outlined-basic" label="Укажите свой город" variant="standard"
      sx={{height: '60px',textIndent: '20px',borderRadius: '100px', background: '#FFF', display: 'flex',}}
      InputProps={{
        disableUnderline: true,
        sx: {
          paddingLeft: '20px',
        },
      }}/>

    </div>
    <div>
    <div>
    <FormLabel id="demo-radio-buttons-group-label" sx={{fontSize: '2rem', color: 'black'}}>Напиши пару слов о себе! Например, что ты любишь или чем хочешь заняться.</FormLabel>
    </div>
    <FormLabel id="demo-radio-buttons-group-label" sx={{fontSize: '1.5rem'}}>(Не обязательно)</FormLabel>

      <TextField id="outlined-basic" label="Я люблю читать рэп..." variant="standard" multiline rows={6}
      sx={{height: 'auto',textIndent: '20px',borderRadius: '16px', background: '#FFF', display: 'flex'}}
      InputProps={{
        disableUnderline: true,
        sx: {
          paddingLeft: '20px',
        },
      }}
      />

    </div>
    <div>
      <div>
    <FormLabel id="demo-radio-buttons-group-label"sx={{fontSize: '2rem', color: 'black'}}>Добавь ссылку на свой Vk</FormLabel>
    </div>
    <div>
    <FormLabel id="demo-radio-buttons-group-label"sx={{fontSize: '1.5rem'}}>(Не обязательно)</FormLabel>
    </div>
    <div>
    <FormLabel id="demo-radio-buttons-group-label"sx={{fontSize: '1.5rem'}}>Ссылка повысит доверие к аккаунту и будет видна только тем, кому ты поставишь лайк!</FormLabel>
    </div>

      <TextField id="outlined-basic" label="vk.com/id1" variant="standard"
      sx={{height: '60px',textIndent: '20px',borderRadius: '100px', background: '#FFF', display: 'flex',}}
      InputProps={{
        disableUnderline: true,
        sx: {
          paddingLeft: '20px',
        },
      }}
      />

    </div>
    <div className="upload">
      <div>
    <FormLabel id="demo-radio-buttons-group-label"sx={{fontSize: '2rem', color: 'black'}}>Загрузить фотографию</FormLabel>
    </div>
    <div>
    <FormLabel id="demo-radio-buttons-group-label"sx={{fontSize: '1.5rem'}}>Чтобы повысить шанс на хорошее знакомство, загружай свои реальные фото. Можно загрузить до 5 фото.</FormLabel>
    </div>
    <Button variant="contained" sx={{borderRadius: '100px', height: '60px', width: '100%', background: '#9094FF',fontSize: '2rem',marginTop: '2rem'}}>Загрузить</Button>

    </div>
    <div className="photos">
      <Avatar sx={{ bgcolor: deepOrange[500],height:'90px',borderRadius: '8px' }} variant="square">
        N
      </Avatar>
      <Avatar sx={{ bgcolor: deepOrange[500],height:'90px',borderRadius: '8px' }} variant="square">
        N
      </Avatar>
      <Avatar sx={{ bgcolor: deepOrange[500],height:'90px',borderRadius: '8px' }} variant="square">
        N
      </Avatar>
      <Avatar sx={{ bgcolor: deepOrange[500],height:'90px',borderRadius: '8px' }} variant="square">
        N
      </Avatar>
      <Avatar sx={{ bgcolor: deepOrange[500],height:'90px',borderRadius: '8px' }} variant="square">
        N
      </Avatar>
    </div>
    <div className="accept">
    <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked style={{color: "white", height: '3rem', width: '3rem',transform: 'scale(2.5)'}} />} label={<span style={{ paddingLeft: '1.8rem', fontSize: '1.5rem', display:'flex' }}>Регистрируясь ты принимаешь пользовательское соглашение, политику конфидициальности и подтверждаешь, что тебе есть 18 лет.</span>} />
    </FormGroup>
    </div>
    
      </div>
      <div className="enter">
      <h1>Смотреть анкеты</h1>
    </div>
    </div>
  );
}
