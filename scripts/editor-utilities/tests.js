import * as EditorUtilities from "./index";

EditorUtilities.Direction.Forward
EditorUtilities.Direction.Right
EditorUtilities.Direction.Back
EditorUtilities.Direction.Left
EditorUtilities.Direction.Up
EditorUtilities.Direction.Down

EditorUtilities.getDirectionVector(EditorUtilities.Direction.Down)

EditorUtilities.getRotationCorrectedDirection(0, EditorUtilities.Direction.Down)

EditorUtilities.getRotationCorrectedDirectionVector(0, EditorUtilities.Direction.Down)

EditorUtilities.getScaledDirectionVector(EditorUtilities.Direction.Up, 15)