export default function extractStates(providerInstances, getStates) {
  let states = {};
  let clientStates;
  const clientStatesKeys = {};

  for (let key in providerInstances) {
    let providerInstance = providerInstances[key];

    states[key] = providerInstance.store.getState();

    if (providerInstance.clientStateKeys) {
      clientStatesKeys[key] = providerInstance.clientStateKeys;
    }
  }

  if (getStates) {
    states = getStates(states);
  }

  clientStates = { ...states };

  for (let key in clientStatesKeys) {
    let clientState = clientStates[key];
    let clientStateKeys = clientStatesKeys[key];

    if (clientState) {
      clientStates[key] = {};

      for (let clientStateKey of clientStateKeys) {
        clientStates[key][clientStateKey] = clientState[clientStateKey];
      }
    }
  }

  return { states, clientStates };
}
