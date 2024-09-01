
import cv2
import pandas as pd
from ultralytics import YOLO
from tracker import Vehicle
import time
from datetime import datetime
import os
import tensorflow as tf
import numpy as np
import joblib
import math


def calculate_lane_priority_and_green_time():

    model=YOLO('yolov8s.pt')

    class_list = ['person', 'bicycle', 'car', 'motorcycle', 'airplane', 'bus', 'train', 'truck', 'boat', 'traffic light', 'fire hydrant', 'stop sign', 'parking meter', 'bench', 'bird', 'cat', 'dog', 'horse', 'sheep', 'cow', 'elephant', 'bear', 'zebra', 'giraffe', 'backpack', 'umbrella', 'handbag', 'tie', 'suitcase', 'frisbee', 'skis', 'snowboard', 'sports ball', 'kite', 'baseball bat', 'baseball glove', 'skateboard', 'surfboard', 'tennis racket', 'bottle', 'wine glass', 'cup', 'fork', 'knife', 'spoon', 'bowl', 'banana', 'apple', 'sandwich', 'orange', 'broccoli', 'carrot', 'hot dog', 'pizza', 'donut', 'cake', 'chair', 'couch', 'potted plant', 'bed', 'dining table', 'toilet', 'tv', 'laptop', 'mouse', 'remote', 'keyboard', 'cell phone', 'microwave', 'oven', 
                'toaster', 'sink', 'refrigerator', 'book', 'clock', 'vase', 'scissors', 'teddy bear', 'hair drier', 'toothbrush']

    tracker=Vehicle()

    #Signal - I


    count=0
    cap1=cv2.VideoCapture('video1.mp4') 
    red_line_y=340
    blue_line_y=300
    offset = 6
    down = {}
    counter_down1 = []

    while True:
        ret1,frame1=cap1.read()
        if not ret1:
            break
        count+=1
        frame1=cv2.resize(frame1,(1020,500))


        results=model.predict(frame1)

        a=results[0].boxes.data
        px=pd.DataFrame(a).astype("float")
        #print(px)
        list = []

        for index, row in px.iterrows():
            x1 = int(row[0])
            y1 = int(row[1])
            x2 = int(row[2])
            y2 = int(row[3])
            d = int(row[5])
            c = class_list[d]
            if 'car' in c:
                list.append([x1, y1, x2, y2])

            elif 'truck' in c:
                list.append([x1, y1, x2, y2])

            elif 'motorcycle' in c:
                list.append([x1, y1, x2, y2])

            elif 'bus' in c:
                list.append([x1, y1, x2, y2])
                
            

        #tracking the vehicle

        bbox_id = tracker.update(list)

        for bbox in bbox_id:
            x3, y3, x4, y4, id = bbox
            cx = int(x3 + x4) // 2
            cy = int(y3 + y4) // 2   
            #cv2.circle(frame,(cx,cy),4,(0,0,255),-1)
            #cv2.rectangle(frame, (x3, y3), (x4, y4), (0, 255, 0), 2) 
            if blue_line_y<(cy+offset) and blue_line_y > (cy-offset):
                down[id]=time.time()
            if id in down:

                if red_line_y<(cy+offset) and red_line_y > (cy-offset):
                    elapsed1_time=time.time() - down[id]
                    # formula of speed= distance/time 
                    if counter_down1.count(id)==0:
                        counter_down1  .append(id)      
                        distance1 = 10 # meters  (Distance between the 2 lines is 10 meters )
                        a_speed_ms1 = distance1 / elapsed1_time
                        a_speed_kh1 = a_speed_ms1 * 3.6
                        cv2.circle(frame1,(cx,cy),4,(0,0,255),-1)
                        cv2.rectangle(frame1, (x3, y3), (x4, y4), (0, 255, 0), 2)  # Draw bounding box
                        cv2.putText(frame1,str(id),(x3,y3),cv2.FONT_HERSHEY_COMPLEX,0.6,(255,255,255),1)
                        cv2.putText(frame1,str(int(a_speed_kh1))+'Km/h',(x4,y4),cv2.FONT_HERSHEY_COMPLEX,0.8,(0,255,255),2)
            
            
        cv2.line(frame1, (125, 340), (460, 340), (0,0,255), 2)
        cv2.putText(frame1, ('Red Line'),(460, 340) , cv2.FONT_HERSHEY_SIMPLEX, 0.5,(0,0,255), 1, cv2.LINE_AA)
        cv2.line(frame1, (250, 300), (470, 300), (255,0,0), 2)
        cv2.putText(frame1, ('Blue Line'), (470, 300), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255,0,0), 1, cv2.LINE_AA)

        cv2.putText(frame1, ('COUNT - ' + str(len(counter_down1))), (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0,0,255), 1, cv2.LINE_AA)
        #cv2.imshow("frame1",frame1)
        if cv2.waitKey(1)&0xFF==27:
            break
    cap1.release()
    cv2.destroyAllWindows()
        


    #Signal - 2
    count=0
    cap2=cv2.VideoCapture('video2.mp4') 
    red_line_y=340
    blue_line_y=300
    offset = 6
    down = {}
    counter_down2= []

    while True:
        ret2,frame2=cap2.read()
        if not ret2:
            break
        count+=1
        frame2=cv2.resize(frame2,(1020,500))


        results=model.predict(frame2)

        a=results[0].boxes.data
        px=pd.DataFrame(a).astype("float")
        #print(px)
        list = []

        for index, row in px.iterrows():
            x1 = int(row[0])
            y1 = int(row[1])
            x2 = int(row[2])
            y2 = int(row[3])
            d = int(row[5])
            c = class_list[d]
            if 'car' in c:
                list.append([x1, y1, x2, y2])

            elif 'truck' in c:
                list.append([x1, y1, x2, y2])

            elif 'motorcycle' in c:
                list.append([x1, y1, x2, y2])

            elif 'bus' in c:
                list.append([x1, y1, x2, y2])
                
            

        #tracking the vehicle

        bbox_id = tracker.update(list)

        for bbox in bbox_id:
            x3, y3, x4, y4, id = bbox
            cx = int(x3 + x4) // 2
            cy = int(y3 + y4) // 2   
            #cv2.circle(frame,(cx,cy),4,(0,0,255),-1)
            #cv2.rectangle(frame, (x3, y3), (x4, y4), (0, 255, 0), 2) 
            if blue_line_y<(cy+offset) and blue_line_y > (cy-offset):
                down[id]=time.time()
            if id in down:

                if red_line_y<(cy+offset) and red_line_y > (cy-offset):
                    elapsed1_time=time.time() - down[id]
                    # formula of speed= distance/time 
                    if counter_down2.count(id)==0:
                        counter_down2.append(id)    
                        distance1 = 10 # meters  (Distance between the 2 lines is 10 meters )
                        a_speed_ms1 = distance1 / elapsed1_time
                        a_speed_kh1 = a_speed_ms1 * 3.6
                        cv2.circle(frame2,(cx,cy),4,(0,0,255),-1)
                        cv2.rectangle(frame2, (x3, y3), (x4, y4), (0, 255, 0), 2)  # Draw bounding box
                        cv2.putText(frame2,str(id),(x3,y3),cv2.FONT_HERSHEY_COMPLEX,0.6,(255,255,255),1)
                        cv2.putText(frame2,str(int(a_speed_kh1))+'Km/h',(x4,y4),cv2.FONT_HERSHEY_COMPLEX,0.8,(0,255,255),2)
            
        
        cv2.line(frame2, (125, 340), (460, 340), (0,0,255), 2)
        cv2.putText(frame2, ('Red Line'),(460, 340) , cv2.FONT_HERSHEY_SIMPLEX, 0.5,(0,0,255), 1, cv2.LINE_AA)
        cv2.line(frame2, (250, 300), (470, 300), (255,0,0), 2)
        cv2.putText(frame2, ('Blue Line'), (470, 300), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255,0,0), 1, cv2.LINE_AA)

        cv2.putText(frame2, ('COUNT - ' + str(len(counter_down2))), (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0,0,255), 1, cv2.LINE_AA)
        #cv2.imshow("frame2",frame2)
        if cv2.waitKey(1)&0xFF==27:
            break
    cap2.release()
    cv2.destroyAllWindows()

    #Signal - 3

    count=0
    cap3=cv2.VideoCapture('video3.mp4') 
    red_line_y=340
    blue_line_y=300
    offset = 6
    down = {}
    counter_down3= []

    while True:
        ret3,frame3=cap3.read()
        if not ret3:
            break
        count+=1
        frame3=cv2.resize(frame3,(1020,500))


        results=model.predict(frame3)

        a=results[0].boxes.data
        px=pd.DataFrame(a).astype("float")
        #print(px)
        list = []

        for index, row in px.iterrows():
            x1 = int(row[0])
            y1 = int(row[1])
            x2 = int(row[2])
            y2 = int(row[3])
            d = int(row[5])
            c = class_list[d]
            if 'car' in c:
                list.append([x1, y1, x2, y2])

            elif 'truck' in c:
                list.append([x1, y1, x2, y2])

            elif 'motorcycle' in c:
                list.append([x1, y1, x2, y2])

            elif 'bus' in c:
                list.append([x1, y1, x2, y2])
                
            

        #tracking the vehicle

        bbox_id = tracker.update(list)

        for bbox in bbox_id:
            x3, y3, x4, y4, id = bbox
            cx = int(x3 + x4) // 2
            cy = int(y3 + y4) // 2   
            #cv2.circle(frame,(cx,cy),4,(0,0,255),-1)
            #cv2.rectangle(frame, (x3, y3), (x4, y4), (0, 255, 0), 2) 
            if blue_line_y<(cy+offset) and blue_line_y > (cy-offset):
                down[id]=time.time()
            if id in down:

                if red_line_y<(cy+offset) and red_line_y > (cy-offset):
                    elapsed1_time=time.time() - down[id]
                    # formula of speed= distance/time 
                    if counter_down3.count(id)==0==0:
                        counter_down3.append(id)      
                        distance1 = 10 # meters  (Distance between the 2 lines is 10 meters )
                        a_speed_ms1 = distance1 / elapsed1_time
                        a_speed_kh1 = a_speed_ms1 * 3.6
                        cv2.circle(frame3,(cx,cy),4,(0,0,255),-1)
                        cv2.rectangle(frame3, (x3, y3), (x4, y4), (0, 255, 0), 2)  # Draw bounding box
                        cv2.putText(frame3,str(id),(x3,y3),cv2.FONT_HERSHEY_COMPLEX,0.6,(255,255,255),1)
                        cv2.putText(frame3,str(int(a_speed_kh1))+'Km/h',(x4,y4),cv2.FONT_HERSHEY_COMPLEX,0.8,(0,255,255),2)
        
        
        cv2.line(frame3, (125, 340), (460, 340), (0,0,255), 2)
        cv2.putText(frame3, ('Red Line'),(460, 340) , cv2.FONT_HERSHEY_SIMPLEX, 0.5,(0,0,255), 1, cv2.LINE_AA)
        cv2.line(frame3, (250, 300), (470, 300), (255,0,0), 2)
        cv2.putText(frame3, ('Blue Line'), (470, 300), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255,0,0), 1, cv2.LINE_AA)

        cv2.putText(frame3, ('COUNT - ' + str(len(counter_down3))), (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0,0,255), 1, cv2.LINE_AA)
        #cv2.imshow("frame3",frame3)
        if cv2.waitKey(1)&0xFF==27:
            break
    cap3.release()
    cv2.destroyAllWindows()

    # Signal - 4

    count=0
    cap4=cv2.VideoCapture('video4.mp4') 
    red_line_y=340
    blue_line_y=300
    offset = 6
    down = {}
    counter_down4= []

    while True:
        ret4,frame4=cap4.read()
        if not ret4:
            break
        count+=1
        frame4=cv2.resize(frame4,(1020,500))


        results=model.predict(frame4)

        a=results[0].boxes.data
        px=pd.DataFrame(a).astype("float")
        #print(px)
        list = []

        for index, row in px.iterrows():
            x1 = int(row[0])
            y1 = int(row[1])
            x2 = int(row[2])
            y2 = int(row[3])
            d = int(row[5])
            c = class_list[d]
            if 'car' in c:
                list.append([x1, y1, x2, y2])

            elif 'truck' in c:
                list.append([x1, y1, x2, y2])

            elif 'motorcycle' in c:
                list.append([x1, y1, x2, y2])

            elif 'bus' in c:
                list.append([x1, y1, x2, y2])
                
            

        #tracking the vehicle

        bbox_id = tracker.update(list)

        for bbox in bbox_id:
            x3, y3, x4, y4, id = bbox
            cx = int(x3 + x4) // 2
            cy = int(y3 + y4) // 2   
            #cv2.circle(frame,(cx,cy),4,(0,0,255),-1)
            #cv2.rectangle(frame, (x3, y3), (x4, y4), (0, 255, 0), 2) 
            if blue_line_y<(cy+offset) and blue_line_y > (cy-offset):
                down[id]=time.time()
            if id in down:

                if red_line_y<(cy+offset) and red_line_y > (cy-offset):
                    elapsed1_time=time.time() - down[id]
                    # formula of speed= distance/time 
                    if counter_down4.count(id)==0:
                        counter_down4  .append(id)      
                        distance1 = 10 # meters  (Distance between the 2 lines is 10 meters )
                        a_speed_ms1 = distance1 / elapsed1_time
                        a_speed_kh1 = a_speed_ms1 * 3.6
                        cv2.circle(frame4,(cx,cy),4,(0,0,255),-1)
                        cv2.rectangle(frame4, (x3, y3), (x4, y4), (0, 255, 0), 2)  # Draw bounding box
                        cv2.putText(frame4,str(id),(x3,y3),cv2.FONT_HERSHEY_COMPLEX,0.6,(255,255,255),1)
                        cv2.putText(frame4,str(int(a_speed_kh1))+'Km/h',(x4,y4),cv2.FONT_HERSHEY_COMPLEX,0.8,(0,255,255),2)
            
        
        cv2.line(frame4, (125, 340), (460, 340), (0,0,255), 2)
        cv2.putText(frame4, ('Red Line'),(460, 340) , cv2.FONT_HERSHEY_SIMPLEX, 0.5,(0,0,255), 1, cv2.LINE_AA)
        cv2.line(frame4, (250, 300), (470, 300), (255,0,0), 2)
        cv2.putText(frame4, ('Blue Line'), (470, 300), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255,0,0), 1, cv2.LINE_AA)

        cv2.putText(frame4, ('COUNT - ' + str(len(counter_down4))), (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0,0,255), 1, cv2.LINE_AA)
        #cv2.imshow("frame4",frame4)
        if cv2.waitKey(1)&0xFF==27:
            break
    cap4.release()
    cv2.destroyAllWindows()
    #im_v = cv2.vconcat([frame1,frame2,frame3,frame4])
    #cv2.imshow("frames",im_v)


    # SIGNAL TIME

    loaded_model = tf.keras.models.load_model('/Users/girivasanthvm/Documents/Smart India Hackton/traffic_management_model.h5', 
                                    custom_objects={'mse': tf.keras.losses.MeanSquaredError()}) 

    scaler = joblib.load('/Users/girivasanthvm/Documents/Smart India Hackton/scaler.pkl')

    def predict_traffic_management(vehicle_counts):
        vehicle_counts = np.array(vehicle_counts).reshape(1, -1) 
        vehicle_counts = scaler.transform(vehicle_counts) 
        predictions = loaded_model.predict(vehicle_counts)
        predicted_lane_priority = np.argmax(predictions[0])
        predicted_green_signal_time = predictions[1][0][0] 

        return predicted_lane_priority, predicted_green_signal_time

    new_vehicle_counts = [len(counter_down1),len(counter_down2),len(counter_down3),len(counter_down4)]  
    priority, green_time = predict_traffic_management(new_vehicle_counts)
    if priority==0:
        counter_down1.clear()
        return {"priority": priority, "green_time":round(green_time),"lane1":new_vehicle_counts[0],"lane2":new_vehicle_counts[1],"lane3":new_vehicle_counts[2],"lane4":new_vehicle_counts[3]}
    elif priority==1:
        counter_down2.clear()
        return {"priority": priority, "green_time": round(green_time),"lane1":new_vehicle_counts[0],"lane2":new_vehicle_counts[1],"lane3":new_vehicle_counts[2],"lane4":new_vehicle_counts[3]}
    elif priority==2:
        counter_down3.clear()
        return {"priority": priority, "green_time": round(green_time),"lane1":new_vehicle_counts[0],"lane2":new_vehicle_counts[1],"lane3":new_vehicle_counts[2],"lane4":new_vehicle_counts[3]}
    else:
        counter_down4.clear()
        return {"priority": priority, "green_time": round(green_time),"lane1":new_vehicle_counts[0],"lane2":new_vehicle_counts[1],"lane3":new_vehicle_counts[2],"lane4":new_vehicle_counts[3]}
    