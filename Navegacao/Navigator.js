import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator} from "@react-navigation/native";
//createNativeStackNavigator

import FiltrosTela from '../Telas/FiltrosTela'
import JogosTela from '../Telas/JogosTela'
import ProgramasTela from '../Telas/ProgramasTela'
import RecomendadosTela from '../Telas/RecomendadosTela'
import PecasTela from '../Telas/PecasTela'
import SelecionadosTela from '../Telas/SelecionadosTela'

const Stack = createNativeStackNavigator()

const container = (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Jogos">
            <Stack.Screen name="Filtros" component={FiltrosTela}/>
            <Stack.Screen name="Jogos" component={JogosTela}/>
            <Stack.Screen name="Programas" component={ProgramasTela}/>
            <Stack.Screen name="Recomendados" component={RecomendadosTela}/>
            <Stack.Screen name="Pecas" component={PecasTela}/>
            <Stack.Screen name="Selecionados" component={SelecionadosTela}/>
        </Stack.Navigator>
    </NavigationContainer>
)

export default container