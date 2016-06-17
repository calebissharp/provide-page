export default function extractStates(providerInstances, getStates) {
  const states = extractServerStates(providerInstances, getStates);
  const clientStates = extractClientStates(providerInstances, states);

  return { states, clientStates };
}

export function extractServerStates(providerInstances, getStates) {
  const states = {};

  for (let providerKey in providerInstances) {
    let providerInstance = providerInstances[providerKey];

    states[providerKey] = providerInstance.store.getState();
  }

  return getStates ? getStates(states) : states;
}

export function extractClientStates(providerInstances, states) {
  const clientStates = {};

  for (let providerKey in states) {
    let providerInstance = providerInstances[providerKey];
    let clientStateKeys = providerInstance && providerInstance.clientStateKeys;
    let state = states[providerKey];

    if (clientStateKeys && state) {
      clientStates[providerKey] = {};

      for (let stateKey of clientStateKeys) {
        clientStates[providerKey][stateKey] = state[stateKey];
      }
    }
  }

  return clientStates;
}
