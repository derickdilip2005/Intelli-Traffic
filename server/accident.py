from tensorflow.keras.models import load_model
import cv2
import math
from skimage.transform import resize
from tensorflow.keras.applications.vgg16 import VGG16, preprocess_input
import numpy as np

# Load your model
def detect():
    model = load_model('/Users/girivasanthvm/Documents/Smart India Hackton/model.h5')

    def extract_frames(videoFile):
        cap = cv2.VideoCapture(videoFile)
        frameRate = cap.get(cv2.CAP_PROP_FPS)  # frame rate
        frames = []

        while(cap.isOpened()):
            frameId = cap.get(cv2.CAP_PROP_POS_FRAMES)  # current frame number
            ret, frame = cap.read()
            if not ret:
                break
            if frameId % math.floor(frameRate) == 0:
                frames.append(frame)

        cap.release()
        return frames

    new_video_file = '/Users/girivasanthvm/Documents/Smart India Hackton/Accident-1.mp4'
    frames = extract_frames(new_video_file)

    def preprocess_frames(frames):
        processed_frames = []
        for frame in frames:
            frame_resized = resize(frame, preserve_range=True, output_shape=(224, 224)).astype(np.float32)
            processed_frames.append(frame_resized)
        processed_frames = np.array(processed_frames)
        processed_frames = preprocess_input(processed_frames)
        return processed_frames

    # Load VGG16 model with local weights path
    local_weights_path = '/Users/girivasanthvm/Documents/Smart India Hackton/vgg16_weights_tf_dim_ordering_tf_kernels_notop.h5'
    base_model = VGG16(weights=local_weights_path, include_top=False, input_shape=(224, 224, 3))

    processed_frames = preprocess_frames(frames)
    features = base_model.predict(processed_frames)
    features = features.reshape(features.shape[0], 7*7*512)
    predictions = model.predict(features)
    predicted_classes = np.argmax(predictions, axis=1)

    i = len(predicted_classes)
    k = 0
    temp = 0

    while i != 0:
        if predicted_classes[i-1] == 1:
            k += 1
            if k == 3:
                temp = 1
                return "Accident Detected"
                temp = 1
               
        i -= 1

    if temp == 0:
        return "No Accident Detected"
