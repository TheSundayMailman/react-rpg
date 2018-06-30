export const ENTER_HUB_MODE = 'ENTER_HUB_MODE';
export const enterHubMode = (messages) => {
  return {
    type: ENTER_HUB_MODE,
    messages
  }
};

export const ENTER_TOWN_MODE = 'ENTER_TOWN_MODE';
export const enterTownMode = (messages) => {
  return {
    type: ENTER_TOWN_MODE,
    messages
  }
};

export const TOGGLE_CONVO_MODE = 'TOGGLE_CONVO_MODE';
export const toggleConvoMode = (messages) => {
  return {
    type: TOGGLE_CONVO_MODE,
    messages
  }
};

export const ENTER_EXPLORE_MODE = 'ENTER_EXPLORE_MODE';
export const enterExploreMode = (location, messages) => {
  return {
    type: ENTER_EXPLORE_MODE,
    location,
    messages
  }
};

export const TOGGLE_EXPLORE_MODE = 'TOGGLE_EXPLORE_MODE';
export const toggleExploreMode = (messages) => {
  return {
    type: TOGGLE_EXPLORE_MODE,
    messages
  }
};

export const POPULATE_ENEMY_OBJECT = 'POPULATE_ENEMY_OBJECT';
export const populateEnemyObject = (enemy) => {
  return {
    type: POPULATE_ENEMY_OBJECT,
    enemy,
  };
};

// export const GET_NEW_ENEMY = 'GET_NEW_ENEMY';
// export const getNewEnemy = () => (dispatch) => {
//   fetch('api/address/here')
//     .then(res => res.json())
//     .then(enemy => disptach(populateEnemyObject(enemy)))
//     .catch(err => console.error(err));
// };

export const TOGGLE_BATTLE_MODE = 'TOGGLE_BATTLE_MODE';
export const toggleBattleMode = (messages) => {
  return {
    type: TOGGLE_BATTLE_MODE,
    messages
  }
};

export const UPDATE_PLAYER_HP = 'UPDATE_PLAYER_HP';
export const updatePlayerHp = (newHp) => {
  return {
    type: UPDATE_PLAYER_HP,
    newHp,
  };
};

export const UPDATE_ENEMY_HP = 'UPDATE_ENEMY_HP';
export const updateEnemyHp = (newHp) => {
  return {
    type: UPDATE_ENEMY_HP,
    newHp,
  };
};

export const FINISH_PLAYER_TURN = 'FINISH_PLAYER_TURN';
export const finishPlayerTurn = (messages) => {
  return {
    type: FINISH_PLAYER_TURN,
    messages
  }
};

export const FINISH_ENEMY_TURN = 'FINISH_ENEMY_TURN';
export const finishEnemyTurn = (messages) => {
  return {
    type: FINISH_ENEMY_TURN,
    messages
  }
};

export const COLLECT_BATTLE_REWARDS = 'COLLECT_BATTLE_REWARDS';
export const collectBattleRewards = (exp, gold) => {
  return {
    type: COLLECT_BATTLE_REWARDS,
    exp,
    gold
  }
};

export const TOGGLE_VICTORY_MODE = 'TOGGLE_VICTORY_MODE';
export const toggleVictoryMode = (messages) => {
  return {
    type: TOGGLE_VICTORY_MODE,
    messages
  }
};

export const TOGGLE_DEFEAT_MODE = 'TOGGLE_DEFEAT_MODE';
export const toggleDefeatMode = (messages) => {
  return {
    type: TOGGLE_DEFEAT_MODE,
    messages
  }
};

export const POPULATE_NPC_OBJECT = 'POPULATE_NPC_OBJECT';
export const populateNpcObject = (npc) => {
  return {
    type: POPULATE_NPC_OBJECT,
    npc
  };
};