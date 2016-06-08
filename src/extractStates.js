export default function extractStates(providerInstances, getStates) {
  let states = {};
  let clientStates;
  const clientStatesKeys = {};

  for (let providerKey in providerInstances) {
    let providerInstance = providerInstances[providerKey];

    states[providerKey] = providerInstance.store.getState();

    if (providerInstance.clientStateKeys) {
      clientStatesKeys[providerKey] = providerInstance.clientStateKeys;
    }
  }

  if (getStates) {
    states = getStates(states);
  }

  clientStates = { ...states };

  for (let providerKey in clientStatesKeys) {
    let clientState = clientStates[providerKey];
    let clientStateKeys = clientStatesKeys[providerKey];

    if (clientState) {
      clientStates[providerKey] = {};

      for (let stateKey of clientStateKeys) {
        clientStates[providerKey][stateKey] = clientState[stateKey];
      }
    }
  }

  return { states, clientStates };
}
