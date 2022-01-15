/**
 * Object containing node props
 */
export type LabelNode = {
  /**
   * Object containing various label props
   */
  node: {
    /**
     * String value representing name of label
     */
    name: string
    /**
     * String value representing value of label
     */
    value: string
  }
}

/**
 * Object containing all labels represented in key-pair format
 */
export type LabelData = { [name: string]: string }
