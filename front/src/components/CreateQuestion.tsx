import React, { ChangeEvent, FormEvent, useEffect, useLayoutEffect, useRef, useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, InputLabel, MenuItem, Select } from '@mui/material';
import { ITheme } from '../interface/Theme';

const CreateQuestion = () => {
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState('Cash');
  const [listThemes, setListThemes] = useState<ITheme[]>([]);

  const [formData, setFormData] = useState({
    question: '',
    reponse: '',
    theme: '', // faire un truc avec le bon dto par pitie
    type: '',
    point: 1,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }


  const CashRef = useRef<HTMLDivElement>(null);
  const QCMRef = useRef<HTMLDivElement>(null);
  const VraiOuFauxRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getThemes = async () => {
    await fetch('http://localhost:4000/theme', {
      method: 'GET'
    }).then(async response => {
      const data: ITheme[] = await response.json();
      setListThemes(data);
      console.log(listThemes);
    })
  }

  const handleSubmit = async () => {
      
    // setFormData({
    //   ...formData,
    //   [type]: type,
    // });
    console.log("llllllll : ", formData);
    await fetch('http://localhost:4000/question',
      { method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
      },
      }).then(response => {
        console.log(response.body)
      }
      )
    }


useEffect(() => {
  getThemes();
}, [])


useEffect(() => {
  if (type == 'Cash' && CashRef.current && QCMRef.current && VraiOuFauxRef.current) {
    CashRef.current.style.visibility = 'visible';
    QCMRef.current.style.visibility = 'hidden';
    VraiOuFauxRef.current.style.visibility = 'hidden';
  }
  else if (type == 'QCM' && QCMRef.current && VraiOuFauxRef.current && CashRef.current) {
    QCMRef.current.style.visibility = 'visible';
    VraiOuFauxRef.current.style.visibility = 'hidden';
    CashRef.current.style.visibility = 'hidden';
  }
  else if (type == 'VraiOuFaux' && VraiOuFauxRef.current && QCMRef.current && CashRef.current) {
    VraiOuFauxRef.current.style.visibility = 'visible';
    QCMRef.current.style.visibility = 'hidden';
    CashRef.current.style.visibility = 'hidden';
  }
})

return (
  <>
    <button onClick={handleClickOpen} className='relative h-[50px] w-[300px] bg-red-700 text-white'>
      createQuestion
    </button>

    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth={false}
      fullWidth={true}
    >
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className='flex justify-center items-center'>
          <DialogTitle>Créer une nouvelle question</DialogTitle>
          <label>Type de question : </label>
          <select className='border' name='type' onChange={handleChange}>
          {/* <select className='border' name='type' onChange={(e) => setType(e.target.value)}> */}
            <option value="Cash">Cash</option>
            <option value="QCM">QCM</option>
            <option value="VraiOuFaux">VraiOuFaux</option>
          </select>
          <label>Theme : </label>
          <select className='border' onChange={handleChange}>
            <option value={''}></option>
            {listThemes.map(data => <option value={data.theme}>{data.theme}</option>)}
          </select>
          <label>Nombre de point : </label>
          <select className='border' name='point' onChange={handleChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <div className='relative h-[500px] flex flex-col justify-center items-center'>
          <div ref={CashRef} className='absolute'>
            <label>
              Question : <input className='border' name="question" onChange={handleChange}></input>
            </label>
            <label>
              Reponse : <input className='border' name="reponse" onChange={handleChange}></input>
            </label>

          </div>
          <div style={{ visibility: 'hidden' }} ref={QCMRef} className='absolute flex justify-center items-center'>
            <label>
              Question : <input className='border' name="question" onChange={handleChange}></input>
            </label>
            <label>
              Bonne Reponse : <input className='border' name="reponse" onChange={handleChange}></input>
            </label>
            <label>
              Mauvaise Reponse : 
              <input className='border' name="reponse" onChange={handleChange}></input>
              <input className='border' name="reponse" onChange={handleChange}></input>
              <input className='border' name="reponse" onChange={handleChange}></input>
            </label>
          </div>
          <div style={{ visibility: 'hidden' }} ref={VraiOuFauxRef} className='absolute flex justify-center items-center'>
            
          </div>
        </div>
      <button type='submit' className='border w-[100px] mx-auto mb-5'>Submit</button>
      </form>



    </Dialog>



    {/* <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Nouvelle Question</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <Select
            autoFocus
            // value={maxWidth}
            // onChange={handleMaxWidthChange}
            label="maxWidth"
            inputProps={{
              name: 'max-width',
              id: 'max-width',
            }}
          >
            <MenuItem value={false as any}>false</MenuItem>
      <MenuItem value="xs">xs</MenuItem>
      <MenuItem value="sm">sm</MenuItem>
      <MenuItem value="md">md</MenuItem>
      <MenuItem value="lg">lg</MenuItem>
      <MenuItem value="xl">xl</MenuItem>
    </Select >
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent >
  <DialogActions>
    <Button onClick={handleClose}>Cancel</Button>
    <Button type="submit">Subscribe</Button>
  </DialogActions>
      </Dialog >  */}
  </>
);
}

export default CreateQuestion
