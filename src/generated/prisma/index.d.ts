
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model LogModel
 * 
 */
export type LogModel = $Result.DefaultSelection<Prisma.$LogModelPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SeverityLevel: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH'
};

export type SeverityLevel = (typeof SeverityLevel)[keyof typeof SeverityLevel]

}

export type SeverityLevel = $Enums.SeverityLevel

export const SeverityLevel: typeof $Enums.SeverityLevel

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more LogModels
 * const logModels = await prisma.logModel.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more LogModels
   * const logModels = await prisma.logModel.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.logModel`: Exposes CRUD operations for the **LogModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LogModels
    * const logModels = await prisma.logModel.findMany()
    * ```
    */
  get logModel(): Prisma.LogModelDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    LogModel: 'LogModel'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "logModel"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      LogModel: {
        payload: Prisma.$LogModelPayload<ExtArgs>
        fields: Prisma.LogModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogModelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogModelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogModelPayload>
          }
          findFirst: {
            args: Prisma.LogModelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogModelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogModelPayload>
          }
          findMany: {
            args: Prisma.LogModelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogModelPayload>[]
          }
          create: {
            args: Prisma.LogModelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogModelPayload>
          }
          createMany: {
            args: Prisma.LogModelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LogModelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogModelPayload>[]
          }
          delete: {
            args: Prisma.LogModelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogModelPayload>
          }
          update: {
            args: Prisma.LogModelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogModelPayload>
          }
          deleteMany: {
            args: Prisma.LogModelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogModelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LogModelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogModelPayload>[]
          }
          upsert: {
            args: Prisma.LogModelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogModelPayload>
          }
          aggregate: {
            args: Prisma.LogModelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogModel>
          }
          groupBy: {
            args: Prisma.LogModelGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogModelCountArgs<ExtArgs>
            result: $Utils.Optional<LogModelCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    logModel?: LogModelOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model LogModel
   */

  export type AggregateLogModel = {
    _count: LogModelCountAggregateOutputType | null
    _avg: LogModelAvgAggregateOutputType | null
    _sum: LogModelSumAggregateOutputType | null
    _min: LogModelMinAggregateOutputType | null
    _max: LogModelMaxAggregateOutputType | null
  }

  export type LogModelAvgAggregateOutputType = {
    id: number | null
  }

  export type LogModelSumAggregateOutputType = {
    id: number | null
  }

  export type LogModelMinAggregateOutputType = {
    id: number | null
    message: string | null
    origin: string | null
    level: $Enums.SeverityLevel | null
    createdAt: Date | null
  }

  export type LogModelMaxAggregateOutputType = {
    id: number | null
    message: string | null
    origin: string | null
    level: $Enums.SeverityLevel | null
    createdAt: Date | null
  }

  export type LogModelCountAggregateOutputType = {
    id: number
    message: number
    origin: number
    level: number
    createdAt: number
    _all: number
  }


  export type LogModelAvgAggregateInputType = {
    id?: true
  }

  export type LogModelSumAggregateInputType = {
    id?: true
  }

  export type LogModelMinAggregateInputType = {
    id?: true
    message?: true
    origin?: true
    level?: true
    createdAt?: true
  }

  export type LogModelMaxAggregateInputType = {
    id?: true
    message?: true
    origin?: true
    level?: true
    createdAt?: true
  }

  export type LogModelCountAggregateInputType = {
    id?: true
    message?: true
    origin?: true
    level?: true
    createdAt?: true
    _all?: true
  }

  export type LogModelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogModel to aggregate.
     */
    where?: LogModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogModels to fetch.
     */
    orderBy?: LogModelOrderByWithRelationInput | LogModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LogModels
    **/
    _count?: true | LogModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LogModelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LogModelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogModelMaxAggregateInputType
  }

  export type GetLogModelAggregateType<T extends LogModelAggregateArgs> = {
        [P in keyof T & keyof AggregateLogModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogModel[P]>
      : GetScalarType<T[P], AggregateLogModel[P]>
  }




  export type LogModelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogModelWhereInput
    orderBy?: LogModelOrderByWithAggregationInput | LogModelOrderByWithAggregationInput[]
    by: LogModelScalarFieldEnum[] | LogModelScalarFieldEnum
    having?: LogModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogModelCountAggregateInputType | true
    _avg?: LogModelAvgAggregateInputType
    _sum?: LogModelSumAggregateInputType
    _min?: LogModelMinAggregateInputType
    _max?: LogModelMaxAggregateInputType
  }

  export type LogModelGroupByOutputType = {
    id: number
    message: string
    origin: string
    level: $Enums.SeverityLevel
    createdAt: Date
    _count: LogModelCountAggregateOutputType | null
    _avg: LogModelAvgAggregateOutputType | null
    _sum: LogModelSumAggregateOutputType | null
    _min: LogModelMinAggregateOutputType | null
    _max: LogModelMaxAggregateOutputType | null
  }

  type GetLogModelGroupByPayload<T extends LogModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogModelGroupByOutputType[P]>
            : GetScalarType<T[P], LogModelGroupByOutputType[P]>
        }
      >
    >


  export type LogModelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    origin?: boolean
    level?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["logModel"]>

  export type LogModelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    origin?: boolean
    level?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["logModel"]>

  export type LogModelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    origin?: boolean
    level?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["logModel"]>

  export type LogModelSelectScalar = {
    id?: boolean
    message?: boolean
    origin?: boolean
    level?: boolean
    createdAt?: boolean
  }

  export type LogModelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message" | "origin" | "level" | "createdAt", ExtArgs["result"]["logModel"]>

  export type $LogModelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LogModel"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      message: string
      origin: string
      level: $Enums.SeverityLevel
      createdAt: Date
    }, ExtArgs["result"]["logModel"]>
    composites: {}
  }

  type LogModelGetPayload<S extends boolean | null | undefined | LogModelDefaultArgs> = $Result.GetResult<Prisma.$LogModelPayload, S>

  type LogModelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogModelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogModelCountAggregateInputType | true
    }

  export interface LogModelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LogModel'], meta: { name: 'LogModel' } }
    /**
     * Find zero or one LogModel that matches the filter.
     * @param {LogModelFindUniqueArgs} args - Arguments to find a LogModel
     * @example
     * // Get one LogModel
     * const logModel = await prisma.logModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogModelFindUniqueArgs>(args: SelectSubset<T, LogModelFindUniqueArgs<ExtArgs>>): Prisma__LogModelClient<$Result.GetResult<Prisma.$LogModelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LogModel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogModelFindUniqueOrThrowArgs} args - Arguments to find a LogModel
     * @example
     * // Get one LogModel
     * const logModel = await prisma.logModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogModelFindUniqueOrThrowArgs>(args: SelectSubset<T, LogModelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogModelClient<$Result.GetResult<Prisma.$LogModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogModelFindFirstArgs} args - Arguments to find a LogModel
     * @example
     * // Get one LogModel
     * const logModel = await prisma.logModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogModelFindFirstArgs>(args?: SelectSubset<T, LogModelFindFirstArgs<ExtArgs>>): Prisma__LogModelClient<$Result.GetResult<Prisma.$LogModelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogModelFindFirstOrThrowArgs} args - Arguments to find a LogModel
     * @example
     * // Get one LogModel
     * const logModel = await prisma.logModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogModelFindFirstOrThrowArgs>(args?: SelectSubset<T, LogModelFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogModelClient<$Result.GetResult<Prisma.$LogModelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LogModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogModelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LogModels
     * const logModels = await prisma.logModel.findMany()
     * 
     * // Get first 10 LogModels
     * const logModels = await prisma.logModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logModelWithIdOnly = await prisma.logModel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogModelFindManyArgs>(args?: SelectSubset<T, LogModelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LogModel.
     * @param {LogModelCreateArgs} args - Arguments to create a LogModel.
     * @example
     * // Create one LogModel
     * const LogModel = await prisma.logModel.create({
     *   data: {
     *     // ... data to create a LogModel
     *   }
     * })
     * 
     */
    create<T extends LogModelCreateArgs>(args: SelectSubset<T, LogModelCreateArgs<ExtArgs>>): Prisma__LogModelClient<$Result.GetResult<Prisma.$LogModelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LogModels.
     * @param {LogModelCreateManyArgs} args - Arguments to create many LogModels.
     * @example
     * // Create many LogModels
     * const logModel = await prisma.logModel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogModelCreateManyArgs>(args?: SelectSubset<T, LogModelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LogModels and returns the data saved in the database.
     * @param {LogModelCreateManyAndReturnArgs} args - Arguments to create many LogModels.
     * @example
     * // Create many LogModels
     * const logModel = await prisma.logModel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LogModels and only return the `id`
     * const logModelWithIdOnly = await prisma.logModel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LogModelCreateManyAndReturnArgs>(args?: SelectSubset<T, LogModelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogModelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LogModel.
     * @param {LogModelDeleteArgs} args - Arguments to delete one LogModel.
     * @example
     * // Delete one LogModel
     * const LogModel = await prisma.logModel.delete({
     *   where: {
     *     // ... filter to delete one LogModel
     *   }
     * })
     * 
     */
    delete<T extends LogModelDeleteArgs>(args: SelectSubset<T, LogModelDeleteArgs<ExtArgs>>): Prisma__LogModelClient<$Result.GetResult<Prisma.$LogModelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LogModel.
     * @param {LogModelUpdateArgs} args - Arguments to update one LogModel.
     * @example
     * // Update one LogModel
     * const logModel = await prisma.logModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogModelUpdateArgs>(args: SelectSubset<T, LogModelUpdateArgs<ExtArgs>>): Prisma__LogModelClient<$Result.GetResult<Prisma.$LogModelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LogModels.
     * @param {LogModelDeleteManyArgs} args - Arguments to filter LogModels to delete.
     * @example
     * // Delete a few LogModels
     * const { count } = await prisma.logModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogModelDeleteManyArgs>(args?: SelectSubset<T, LogModelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LogModels
     * const logModel = await prisma.logModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogModelUpdateManyArgs>(args: SelectSubset<T, LogModelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogModels and returns the data updated in the database.
     * @param {LogModelUpdateManyAndReturnArgs} args - Arguments to update many LogModels.
     * @example
     * // Update many LogModels
     * const logModel = await prisma.logModel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LogModels and only return the `id`
     * const logModelWithIdOnly = await prisma.logModel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LogModelUpdateManyAndReturnArgs>(args: SelectSubset<T, LogModelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogModelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LogModel.
     * @param {LogModelUpsertArgs} args - Arguments to update or create a LogModel.
     * @example
     * // Update or create a LogModel
     * const logModel = await prisma.logModel.upsert({
     *   create: {
     *     // ... data to create a LogModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LogModel we want to update
     *   }
     * })
     */
    upsert<T extends LogModelUpsertArgs>(args: SelectSubset<T, LogModelUpsertArgs<ExtArgs>>): Prisma__LogModelClient<$Result.GetResult<Prisma.$LogModelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LogModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogModelCountArgs} args - Arguments to filter LogModels to count.
     * @example
     * // Count the number of LogModels
     * const count = await prisma.logModel.count({
     *   where: {
     *     // ... the filter for the LogModels we want to count
     *   }
     * })
    **/
    count<T extends LogModelCountArgs>(
      args?: Subset<T, LogModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LogModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LogModelAggregateArgs>(args: Subset<T, LogModelAggregateArgs>): Prisma.PrismaPromise<GetLogModelAggregateType<T>>

    /**
     * Group by LogModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogModelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LogModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogModelGroupByArgs['orderBy'] }
        : { orderBy?: LogModelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LogModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LogModel model
   */
  readonly fields: LogModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LogModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogModelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LogModel model
   */
  interface LogModelFieldRefs {
    readonly id: FieldRef<"LogModel", 'Int'>
    readonly message: FieldRef<"LogModel", 'String'>
    readonly origin: FieldRef<"LogModel", 'String'>
    readonly level: FieldRef<"LogModel", 'SeverityLevel'>
    readonly createdAt: FieldRef<"LogModel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LogModel findUnique
   */
  export type LogModelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogModel
     */
    select?: LogModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogModel
     */
    omit?: LogModelOmit<ExtArgs> | null
    /**
     * Filter, which LogModel to fetch.
     */
    where: LogModelWhereUniqueInput
  }

  /**
   * LogModel findUniqueOrThrow
   */
  export type LogModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogModel
     */
    select?: LogModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogModel
     */
    omit?: LogModelOmit<ExtArgs> | null
    /**
     * Filter, which LogModel to fetch.
     */
    where: LogModelWhereUniqueInput
  }

  /**
   * LogModel findFirst
   */
  export type LogModelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogModel
     */
    select?: LogModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogModel
     */
    omit?: LogModelOmit<ExtArgs> | null
    /**
     * Filter, which LogModel to fetch.
     */
    where?: LogModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogModels to fetch.
     */
    orderBy?: LogModelOrderByWithRelationInput | LogModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogModels.
     */
    cursor?: LogModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogModels.
     */
    distinct?: LogModelScalarFieldEnum | LogModelScalarFieldEnum[]
  }

  /**
   * LogModel findFirstOrThrow
   */
  export type LogModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogModel
     */
    select?: LogModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogModel
     */
    omit?: LogModelOmit<ExtArgs> | null
    /**
     * Filter, which LogModel to fetch.
     */
    where?: LogModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogModels to fetch.
     */
    orderBy?: LogModelOrderByWithRelationInput | LogModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogModels.
     */
    cursor?: LogModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogModels.
     */
    distinct?: LogModelScalarFieldEnum | LogModelScalarFieldEnum[]
  }

  /**
   * LogModel findMany
   */
  export type LogModelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogModel
     */
    select?: LogModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogModel
     */
    omit?: LogModelOmit<ExtArgs> | null
    /**
     * Filter, which LogModels to fetch.
     */
    where?: LogModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogModels to fetch.
     */
    orderBy?: LogModelOrderByWithRelationInput | LogModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LogModels.
     */
    cursor?: LogModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogModels.
     */
    skip?: number
    distinct?: LogModelScalarFieldEnum | LogModelScalarFieldEnum[]
  }

  /**
   * LogModel create
   */
  export type LogModelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogModel
     */
    select?: LogModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogModel
     */
    omit?: LogModelOmit<ExtArgs> | null
    /**
     * The data needed to create a LogModel.
     */
    data: XOR<LogModelCreateInput, LogModelUncheckedCreateInput>
  }

  /**
   * LogModel createMany
   */
  export type LogModelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LogModels.
     */
    data: LogModelCreateManyInput | LogModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LogModel createManyAndReturn
   */
  export type LogModelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogModel
     */
    select?: LogModelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogModel
     */
    omit?: LogModelOmit<ExtArgs> | null
    /**
     * The data used to create many LogModels.
     */
    data: LogModelCreateManyInput | LogModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LogModel update
   */
  export type LogModelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogModel
     */
    select?: LogModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogModel
     */
    omit?: LogModelOmit<ExtArgs> | null
    /**
     * The data needed to update a LogModel.
     */
    data: XOR<LogModelUpdateInput, LogModelUncheckedUpdateInput>
    /**
     * Choose, which LogModel to update.
     */
    where: LogModelWhereUniqueInput
  }

  /**
   * LogModel updateMany
   */
  export type LogModelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LogModels.
     */
    data: XOR<LogModelUpdateManyMutationInput, LogModelUncheckedUpdateManyInput>
    /**
     * Filter which LogModels to update
     */
    where?: LogModelWhereInput
    /**
     * Limit how many LogModels to update.
     */
    limit?: number
  }

  /**
   * LogModel updateManyAndReturn
   */
  export type LogModelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogModel
     */
    select?: LogModelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogModel
     */
    omit?: LogModelOmit<ExtArgs> | null
    /**
     * The data used to update LogModels.
     */
    data: XOR<LogModelUpdateManyMutationInput, LogModelUncheckedUpdateManyInput>
    /**
     * Filter which LogModels to update
     */
    where?: LogModelWhereInput
    /**
     * Limit how many LogModels to update.
     */
    limit?: number
  }

  /**
   * LogModel upsert
   */
  export type LogModelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogModel
     */
    select?: LogModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogModel
     */
    omit?: LogModelOmit<ExtArgs> | null
    /**
     * The filter to search for the LogModel to update in case it exists.
     */
    where: LogModelWhereUniqueInput
    /**
     * In case the LogModel found by the `where` argument doesn't exist, create a new LogModel with this data.
     */
    create: XOR<LogModelCreateInput, LogModelUncheckedCreateInput>
    /**
     * In case the LogModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogModelUpdateInput, LogModelUncheckedUpdateInput>
  }

  /**
   * LogModel delete
   */
  export type LogModelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogModel
     */
    select?: LogModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogModel
     */
    omit?: LogModelOmit<ExtArgs> | null
    /**
     * Filter which LogModel to delete.
     */
    where: LogModelWhereUniqueInput
  }

  /**
   * LogModel deleteMany
   */
  export type LogModelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogModels to delete
     */
    where?: LogModelWhereInput
    /**
     * Limit how many LogModels to delete.
     */
    limit?: number
  }

  /**
   * LogModel without action
   */
  export type LogModelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogModel
     */
    select?: LogModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogModel
     */
    omit?: LogModelOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const LogModelScalarFieldEnum: {
    id: 'id',
    message: 'message',
    origin: 'origin',
    level: 'level',
    createdAt: 'createdAt'
  };

  export type LogModelScalarFieldEnum = (typeof LogModelScalarFieldEnum)[keyof typeof LogModelScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'SeverityLevel'
   */
  export type EnumSeverityLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SeverityLevel'>
    


  /**
   * Reference to a field of type 'SeverityLevel[]'
   */
  export type ListEnumSeverityLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SeverityLevel[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type LogModelWhereInput = {
    AND?: LogModelWhereInput | LogModelWhereInput[]
    OR?: LogModelWhereInput[]
    NOT?: LogModelWhereInput | LogModelWhereInput[]
    id?: IntFilter<"LogModel"> | number
    message?: StringFilter<"LogModel"> | string
    origin?: StringFilter<"LogModel"> | string
    level?: EnumSeverityLevelFilter<"LogModel"> | $Enums.SeverityLevel
    createdAt?: DateTimeFilter<"LogModel"> | Date | string
  }

  export type LogModelOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    origin?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
  }

  export type LogModelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LogModelWhereInput | LogModelWhereInput[]
    OR?: LogModelWhereInput[]
    NOT?: LogModelWhereInput | LogModelWhereInput[]
    message?: StringFilter<"LogModel"> | string
    origin?: StringFilter<"LogModel"> | string
    level?: EnumSeverityLevelFilter<"LogModel"> | $Enums.SeverityLevel
    createdAt?: DateTimeFilter<"LogModel"> | Date | string
  }, "id">

  export type LogModelOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    origin?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    _count?: LogModelCountOrderByAggregateInput
    _avg?: LogModelAvgOrderByAggregateInput
    _max?: LogModelMaxOrderByAggregateInput
    _min?: LogModelMinOrderByAggregateInput
    _sum?: LogModelSumOrderByAggregateInput
  }

  export type LogModelScalarWhereWithAggregatesInput = {
    AND?: LogModelScalarWhereWithAggregatesInput | LogModelScalarWhereWithAggregatesInput[]
    OR?: LogModelScalarWhereWithAggregatesInput[]
    NOT?: LogModelScalarWhereWithAggregatesInput | LogModelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LogModel"> | number
    message?: StringWithAggregatesFilter<"LogModel"> | string
    origin?: StringWithAggregatesFilter<"LogModel"> | string
    level?: EnumSeverityLevelWithAggregatesFilter<"LogModel"> | $Enums.SeverityLevel
    createdAt?: DateTimeWithAggregatesFilter<"LogModel"> | Date | string
  }

  export type LogModelCreateInput = {
    message: string
    origin: string
    level: $Enums.SeverityLevel
    createdAt?: Date | string
  }

  export type LogModelUncheckedCreateInput = {
    id?: number
    message: string
    origin: string
    level: $Enums.SeverityLevel
    createdAt?: Date | string
  }

  export type LogModelUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    level?: EnumSeverityLevelFieldUpdateOperationsInput | $Enums.SeverityLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogModelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    level?: EnumSeverityLevelFieldUpdateOperationsInput | $Enums.SeverityLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogModelCreateManyInput = {
    id?: number
    message: string
    origin: string
    level: $Enums.SeverityLevel
    createdAt?: Date | string
  }

  export type LogModelUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    level?: EnumSeverityLevelFieldUpdateOperationsInput | $Enums.SeverityLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogModelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    level?: EnumSeverityLevelFieldUpdateOperationsInput | $Enums.SeverityLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumSeverityLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.SeverityLevel | EnumSeverityLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SeverityLevel[] | ListEnumSeverityLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SeverityLevel[] | ListEnumSeverityLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityLevelFilter<$PrismaModel> | $Enums.SeverityLevel
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type LogModelCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    origin?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
  }

  export type LogModelAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LogModelMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    origin?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
  }

  export type LogModelMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    origin?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
  }

  export type LogModelSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumSeverityLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SeverityLevel | EnumSeverityLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SeverityLevel[] | ListEnumSeverityLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SeverityLevel[] | ListEnumSeverityLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityLevelWithAggregatesFilter<$PrismaModel> | $Enums.SeverityLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeverityLevelFilter<$PrismaModel>
    _max?: NestedEnumSeverityLevelFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumSeverityLevelFieldUpdateOperationsInput = {
    set?: $Enums.SeverityLevel
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumSeverityLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.SeverityLevel | EnumSeverityLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SeverityLevel[] | ListEnumSeverityLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SeverityLevel[] | ListEnumSeverityLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityLevelFilter<$PrismaModel> | $Enums.SeverityLevel
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumSeverityLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SeverityLevel | EnumSeverityLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SeverityLevel[] | ListEnumSeverityLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SeverityLevel[] | ListEnumSeverityLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityLevelWithAggregatesFilter<$PrismaModel> | $Enums.SeverityLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeverityLevelFilter<$PrismaModel>
    _max?: NestedEnumSeverityLevelFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}