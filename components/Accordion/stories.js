import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Accordion from './index'

storiesOf('Accordion', module)
  .add('Display Information', () => (
    <Accordion onChangeAccoridionSection={action('getOpenSections')}>
      <div label="Training Strength">
        <p>
          <strong>Pull up</strong> 8x2
        </p>
        <p>
          <strong>Muscle up</strong> 4x2
        </p>
        <p>
          <strong>Leg Raises</strong> 5x10
        </p>
      </div>
      <div label="Training Technical">
        <p>
          <strong>HSPU</strong> 5x2
        </p>
        <p>
          <strong>Back lever</strong> 10"
        </p>
        <p>
          <strong>Front lever</strong> 10"
        </p>
      </div>
    </Accordion>
  ))
  .add('Display Forms', () => (
    <Accordion>
      <form label="Sign In form">
        <p>
          Username:{' '}
          <input name={'username'} placeholder={'Username...'} type={'text'} />
        </p>
        <p>
          Password:{' '}
          <input
            name={'password'}
            placeholder={'Password...'}
            type={'password'}
          />
        </p>
        <p>
          <button type={'button'} onClick={action('clicked')}>
            Sign in
          </button>
        </p>
      </form>
      <form label={'Sign up form'}>
        <p>
          Name: <input name="name" placeholder="Name..." type={'text'} />
        </p>
        <p>
          Surname: <input name="surname" placeholder="Surname..." type="text" />
        </p>
        <p>
          Email: <input name="email" placeholder="Email..." type={'email'} />
        </p>
        <p>
          Username:{' '}
          <input name={'username'} placeholder={'Username...'} type={'text'} />
        </p>
        <p>
          City:
          <select name="city">
            <option value="0">Select one</option>
            <option value="1">Milano</option>
            <option value="2">Lugano</option>
          </select>
        </p>
        <p>
          Password:{' '}
          <input
            name={'password'}
            placeholder={'Password...'}
            type={'password'}
          />
        </p>
        <p>
          <button type={'button'} onClick={action('clicked')}>
            Sign up
          </button>
        </p>
      </form>
    </Accordion>
  ))
  .add('Both display info and form Accordion', () => (
    <Accordion>
      <div label="Displays Information and form">
        <p>
          <strong>Favorite Food :</strong> Rice{' '}
        </p>
        <p>
          <strong>Dislike :</strong> Wine{' '}
        </p>
        <p>
          <strong>Love :</strong> Beer{' '}
        </p>
        <h3>Sign up if you agree</h3>
        <form label={'Sign up form'}>
          <p>
            Name: <input name="name" placeholder="Name..." type={'text'} />
          </p>
          <p>
            Surname:{' '}
            <input name="surname" placeholder="Surname..." type="text" />
          </p>
          <p>
            Email: <input name="email" placeholder="Email..." type={'email'} />
          </p>
          <p>
            Username:{' '}
            <input
              name={'username'}
              placeholder={'Username...'}
              type={'text'}
            />
          </p>
          <p>
            City:
            <select name="city">
              <option value="0">Select one</option>
              <option value="1">Milano</option>
              <option value="2">Lugano</option>
            </select>
          </p>
          <p>
            Password:{' '}
            <input
              name={'password'}
              placeholder={'Password...'}
              type={'password'}
            />
          </p>
          <p>
            <button type={'button'} onClick={action('clicked')}>
              Sign up
            </button>
          </p>
        </form>
      </div>
    </Accordion>
  ))
  .add('Small Accordion', () => (
    <Accordion size={'small'}>
      <div label={'Alcani General Formulas'}>
        <p>
          <strong>CnH2n+2</strong>
        </p>
      </div>
      <div label="Alcani">
        <p>
          <strong>CH4</strong>Metano
        </p>
        <p>
          <strong>C2H6</strong>Etano
        </p>
        <p>
          <strong>C3H8</strong>Propano
        </p>
      </div>
    </Accordion>
  ))
  .add('Medium Accordion', () => (
    <Accordion size={'medium'}>
      <div label={'Alcheni General Formulas'}>
        <p>
          <strong>CnH2n</strong>
        </p>
      </div>
      <div label={'Alcheni'}>
        <p>
          <strong>C2H4</strong>Etilene
        </p>
        <p>
          <strong>C3H6</strong>Propene
        </p>
        <p>
          <strong>C4H8</strong>Butene
        </p>
      </div>
    </Accordion>
  ))
  .add('Large Accordion', () => (
    <Accordion>
      <div label={'Alchini General Formulas'}>
        <p>
          <strong>CnH2n-2</strong>
        </p>
      </div>
      <div label="Alchini">
        <p className="test_classname">
          <strong>C2H2</strong>Etino
        </p>
        <p>
          <strong>C3H4</strong>Propino
        </p>
        <p>
          <strong>C4H6</strong>Butino
        </p>
      </div>
    </Accordion>
  ))
  .add('Accordion first Open', () => (
    <Accordion activeIds={[0]}>
      <div label={'Alchini General Formulas'}>
        <p>
          <strong>CnH2n-2</strong>
        </p>
      </div>
      <div label="Alchini">
        <p>
          <strong>C2H2</strong>Etino
        </p>
        <p>
          <strong>C3H4</strong>Propino
        </p>
        <p>
          <strong>C4H6</strong>Butino
        </p>
      </div>
    </Accordion>
  ))
