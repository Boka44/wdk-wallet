/** @interface */
export class IDisposable {
    /**
     * True if the object has been disposed.
     *
     * @type {boolean}
     */
    get disposed(): boolean;
    /**
     * Disposes the object along with all its data (cleaning up any sensitive field from memory).
     */
    dispose(): void;
}
