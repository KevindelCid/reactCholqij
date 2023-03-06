
import React, { useEffect, useState } from 'react';
import { View, Button, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { cholqij, prettiDate, usableDate } from '../../utils/cholqij';

export const MyDateTimePicker = ({setSelectedDate}) => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
     
    };
  
    const showMode = currentMode => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
    };
  
    useEffect(() => {
     setSelectedDate({ 
      usableDate: usableDate(date.getFullYear(), date.getMonth(), date.getDate()),
      prettiDate: prettiDate(date.getFullYear(), date.getMonth(), date.getDate()),
      year: date.getFullYear(), month: date.getMonth(), day: date.getDate() 
    })
    }, [date])
    

    
    return (
      <View>
        <View>
          <Button onPress={showDatepicker} title="Seleccione una fecha" />
        </View>
        {/* <View>
          <Button onPress={showTimepicker} title="Select time" />
        </View> */}
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={false}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
    );
  };
  