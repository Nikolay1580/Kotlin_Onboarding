type Nullable<T> = T | null | undefined
declare const __doNotImplementIt: unique symbol
type __doNotImplementIt = typeof __doNotImplementIt
export namespace alias {
    class JsCard {
        constructor(id: number, words: Array<string>);
        get id(): number;
        get words(): Array<string>;
        equals(other: Nullable<any>): boolean;
        hashCode(): number;
        component1(): number;
        component2(): Array<string>;
        copy(id?: number, words?: Array<string>): alias.JsCard;
        toString(): string;
    }
}
export namespace alias {
    class JsTeam {
        constructor(id: number, points: number, name: string);
        get id(): number;
        get points(): number;
        set points(value: number);
        get name(): string;
        component1(): number;
        component2(): number;
        component3(): string;
        copy(id?: number, points?: number, name?: string): alias.JsTeam;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace card.trainer {
    class JsCardTrainerModel {
        constructor(front: string, back: string);
        get front(): string;
        get back(): string;
        component1(): string;
        component2(): string;
        copy(front?: string, back?: string): card.trainer.JsCardTrainerModel;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace codenames {
    class JsCodeNamesCard {
        constructor(id: number, word: string);
        get id(): number;
        get word(): string;
        component1(): number;
        component2(): string;
        copy(id?: number, word?: string): codenames.JsCodeNamesCard;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export as namespace CSC_Kotlin_Course_Part2_common;