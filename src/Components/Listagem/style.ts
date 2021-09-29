import { Feather } from '@expo/vector-icons';
import { getStatusBarHeight, ifIphoneX } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from "styled-components/native";


interface TypeProps{
    type: 'up' | 'down' | 'total'

}


