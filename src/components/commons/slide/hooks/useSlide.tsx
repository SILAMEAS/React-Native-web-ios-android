import React, {
  createContext,
  useContext,
  useMemo,
  useReducer,
  PropsWithChildren,
  useCallback,
} from 'react';

type ActionType = {type: 'NEXT'} | {type: 'BACK'} | {type: 'JUMP_TO', index: number
};

export interface Slide {
  index: number;
  totalSteps: number;
  isLast: boolean;
  isFirst: boolean;
}

type UseSlideManagerResult = ReturnType<typeof useSlideManager>;

const SlideContext = createContext<UseSlideManagerResult>({
  slide: {index: 0, totalSteps: 0, isFirst: true, isLast: false},
  next: () => {},
  back: () => {},
  jumpTo: () => {},
});

function useSlideManager(initialSlide: Slide): {
  slide: Slide;
  next: () => void;
  back: () => void;
  jumpTo: (index: number) => void;
} {
  const [slide, dispatch] = useReducer((state: Slide, action: ActionType) => {
    switch (action.type) {
      case 'NEXT':
        state.isFirst = false;
        if (state.index === state.totalSteps - 1) {
          return {...state};
        }

        state.isLast = state.index + 1 === state.totalSteps - 1;
        return {...state, index: state.index + 1};
      case 'BACK':
        state.isLast = false;
        if (state.index <= 0) {
          return {...state};
        }

        state.isFirst = state.index - 1 === 0;
        return {...state, index: state.index - 1};

      case 'JUMP_TO':
        state.isLast = state.totalSteps === action.index;
        return {...state, index: action.index};

      default:
        throw new Error('Type unknown!');
    }
  }, initialSlide);
  const next = useCallback(() => {
    dispatch({
      type: 'NEXT',
    });
  }, []);

  const back = useCallback(() => {
    dispatch({
      type: 'BACK',
    });
  }, []);

  const jumpTo = useCallback((index: number) => {
    dispatch({
      type: 'JUMP_TO',
      index: index,
    });
  }, []);

  return {slide, next, back, jumpTo};
}

export const SlideProvider: React.FunctionComponent<
  PropsWithChildren<{initialSlide: Slide}>
> = ({initialSlide, children}) => (
  <SlideContext.Provider value={useSlideManager(initialSlide)}>
    {children}
  </SlideContext.Provider>
);

export const useSlide = () => {
  const {slide, back, next, jumpTo} = useContext(SlideContext);

  return useMemo(
    () => ({
      back,
      next,
      jumpTo,
      slide,
    }),
    [slide, back, next, jumpTo],
  );
};
